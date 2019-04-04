check.vars(c("ACTIONS.TAKEN.CSV.DIRTY"))

########################################################################################################
########################################################################################################

actions.taken.all <- read.csv(ACTIONS.TAKEN.CSV.DIRTY, stringsAsFactors = FALSE)
actions.taken.all <- actions.taken.all %>% mutate(
  Allegation.short = substring(trim(Allegation), 16, 999),
  Allegation.simple = case_when(
    Allegation.short == "NEGLECT OF DUTY" ~ "Neglect of duty",
    Allegation.short == "Professionalism" ~ "Professionalism",
    Allegation.short == "INSTRUCTIONS FROM AUTHORITATIVE SOURCE" ~ "Instructions from authoritative source",
    Allegation.short == "ADHERENCE TO LAW" ~ "Adherence to law",
    Allegation.short == "UNAUTHORIZED FORCE" ~ "Unauthorized force",
    Allegation.short == "COURTESY" ~ "Courtesy",
    Allegation.short == "VERBAL INTIMIDATION" ~ "Verbal intimidation",
    TRUE ~ "Other"
  )
) %>% mutate(
  Allegation.primary.key = vdigest(Allegation.primary.key)
)  %>% select(
  Action.taken.OIPM,
  Action.taken.year,
  Allegation.short,
  Allegation.primary.key
)

write.csv(actions.taken.all, file = ACTIONS.TAKEN.CSV.SANITIZED)

