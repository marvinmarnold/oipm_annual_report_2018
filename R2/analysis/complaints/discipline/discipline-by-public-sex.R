check.vars(c("allegations.for.year", "actions.taken.for.year"))

########################################################################################################
########################################################################################################
title <- "Discipline by Complainant's Sex"

complainant.info <- allegations.all %>% select(Citizen.sex, Allegation.primary.key) %>% distinct()
detailed.actions.for.year <- merge(actions.taken.for.year, complainant.info, by = "Allegation.primary.key", all.x = TRUE)

discipline.by.sex <- detailed.actions.for.year %>% group_by(Action.taken.OIPM, Citizen.sex)
discipline.count.by.sex <- summarize(discipline.by.sex, num.allegations = n())

p.discipline.by.sex <- plot_ly(discipline.count.by.sex, 
                               x = ~Action.taken.OIPM, y = ~num.allegations, 
                               type = 'bar',  name = ~Citizen.sex, 
                               color = ~Citizen.sex) %>%
  
  layout(xaxis = list(title = "Type of allegation", 
                      showgrid = F), 
         yaxis = list(title = 'Number allegations'), 
         barmode = 'stack',
         hovermode = 'compare', 
         margin = list(r = 100, b = 100),
         title = title)

p.discipline.by.sex
gen.plotly.json(p.discipline.by.sex, "discipline-by-public-sex")