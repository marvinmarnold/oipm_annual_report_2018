in.complaints <- read.csv("data/indianapolis-complaints.csv")


in.date.format <- "%Y-%m-%d %H:%M:%S"
in.complaints.year <- in.complaints %>% mutate(
  year = sapply(occurredDate, function (date) format(as.Date(date, format=in.date.format), "%Y"))
) %>% filter(
  year == CURRENT.YEAR
)

in.complaints.year %>% nrow

