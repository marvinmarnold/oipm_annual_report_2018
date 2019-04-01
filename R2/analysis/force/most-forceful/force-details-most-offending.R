check.vars(c("uof.for.year"))

# Breakout information about officers using most force

uof.per.officer <- uof.for.year %>% group_by(Officer.primary.key)
uof.count.per.officer <- uof.per.officer %>% summarise(count = n())
uof.count.per.officer <- uof.count.per.officer %>% mutate(
  rank = rank(-count, ties.method ="first"),
  rank.bucket = sapply(rank, bucket.rank)
) %>% arrange(rank)

# FTN Analysis
# This is a little fudged. Not using the count of FTN, instead using the count of unique <FTN, Officer>
ftn.per.officer <- uof.for.year %>% select(FIT.Number, Officer.primary.key) %>% distinct %>% group_by(Officer.primary.key)
ftn.count.per.officer <- ftn.per.officer %>% summarise(count = n())
ftn.count.per.officer <- ftn.count.per.officer %>% mutate(
  rank = rank(-count, ties.method ="first"),
  rank.bucket = sapply(rank, bucket.rank)
) %>% arrange(rank)

get.top.uof.details <- function(ranks) {

  add.row <- function(current.rank) {
    top.uof <- uof.count.per.officer %>% filter(rank.bucket <= current.rank)
    top.officers.uof <- merge(top.uof, officers.all, by.x = "Officer.primary.key", by.y = "Officer.number")
    top.uof.num.missing <- current.rank - nrow(top.officers.uof)
    top.uof.pct <- force.count.per.bucket %>% filter(rank.buckets == current.rank) %>% select(uof.pct.per.bucket)
    
    # Count males
    top.uof.num.male <- top.officers.uof %>% filter(Officer.sex == 'M') %>% nrow
    
    # Age
    top.uof.min.age <- min(top.officers.uof$Age %>% na.omit())
    top.uof.max.age <- max(top.officers.uof$Age %>% na.omit())
    
    # Experience
    top.uof.min.exp <- min(top.officers.uof$Years.employed %>% na.omit())
    top.uof.max.exp <- max(top.officers.uof$Years.employed %>% na.omit())
    
    # Race
    top.uof.num.white <- top.officers.uof %>% filter(Officer.race == 'White') %>% nrow
    top.uof.num.black <- top.officers.uof %>% filter(Officer.race == 'Black / African American') %>% nrow
    topuof.num.hispanic <- top.officers.uof %>% filter(Officer.race == 'Hispanic') %>% nrow
    top.uof.num.native <- top.officers.uof %>% filter(Officer.race == 'Native American') %>% nrow
    top.uof.num.asian <- top.officers.uof %>% filter(Officer.race == 'Asian / Pacific Islander') %>% nrow
    top.uof.num.race <- top.officers.uof %>% filter(Officer.race == 'Unknown race') %>% nrow
  
    # Division
    # top.5.officers.uof.division <- top.5.officers.uof %>% select(Officer.division) %>% group_by(Officer.division) %>% summarise(count = n())
    
    # Unit
    # top.5.officers.uof.unit <- top.5.officers.uof %>% select(Officer.sub.division.A) %>% group_by(Officer.sub.division.A) %>% summarise(count = n())
    
    new.details <- c(
      current.rank, "uof", top.uof.num.missing, top.uof.pct,
      top.uof.num.male, top.uof.min.age, top.uof.max.age, top.uof.min.exp, top.uof.max.exp,
      top.uof.num.white, top.uof.num.black, topuof.num.hispanic, top.uof.num.native, top.uof.num.asian, top.uof.num.race
    )
    
    return(new.details)
  }
  
  all.details <- sapply(ranks, add.row)

  return(all.details)
}
ranks <- c(5, 10, 20)

top.details <- data.frame(t(get.top.uof.details(ranks)))

colnames(top.details) <- c(
 "Num officers", "Type", "Num missing", "Pct of total", 
 "Num male", "Min age", "Max age", "Min exp", "Max exp",
 "Num white", "Num black", "Num hispanic", "Num native", "Num asian", "Num unknown"#,
# "Divisions", "Units"
)
top.details
library(jsonlite)
top.details.json <- toJSON(top.details, dataframe="rows", auto_unbox = TRUE)
write_json(top.details.json, paste0(PLOTLY.OUTPUT.PATH, "uof-details-most.json"), simplifyVector = TRU)
