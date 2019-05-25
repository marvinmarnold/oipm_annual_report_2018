check.vars(c("uof.for.year"))
title <- "UOF by diposition"

########################################################################################################
########################################################################################################
uof.for.year %>% select(Disposition) %>% distinct

uof.normalized.dispositions <- uof.for.year %>% mutate(
  Disposition = case_when(
    Disposition == "UOF Justified" ~ "Authorized",
    Disposition == "UOF Justified With Policy Violation" ~ "Authorized",
    Disposition == "UOF Justified With Training" ~ "Authorized",
    Disposition == "Cancel FIT FTN" ~ "No force used",
    Disposition == "UOF Complaint of Injury/No Reportable Force Used" ~ "No force used",
    Disposition == "UOF No Reportable Force Used by Officer" ~ "No force used",
    Disposition == "NULL" ~ "Invalid data",
    TRUE ~ Disposition
  )
)

uof.by.disposition <- uof.normalized.dispositions %>% group_by(Disposition)
disposition.counts <- summarise(uof.by.disposition, count = n())

p.uof.by.disposition <- plot_ly(disposition.counts, x = ~Disposition, y = ~count, type = "bar") %>%
  layout(margin = list(b = 150))
p.uof.by.disposition
gen.plotly.json(p.uof.by.disposition, "uof-by-disposition")
