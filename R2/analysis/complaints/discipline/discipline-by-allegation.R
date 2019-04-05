check.vars(c("actions.taken.for.year"))
title <- "Discipline by allegation"

########################################################################################################
########################################################################################################

discipline.by.allegation <- actions.taken.for.year %>% group_by(Action.taken.OIPM, Allegation.simple)
discipline.count.by.allegation <- summarize(discipline.by.allegation, num.allegations = n())

p.discipline.by.allegation <- plot_ly(discipline.count.by.allegation, 
                                      x = ~Action.taken.OIPM, y = ~num.allegations, 
                                      type = 'bar',  name = ~Allegation.simple, 
                                      color = ~Allegation.simple) %>%
  
  layout(xaxis = list(title = "Type of allegation", 
                      showgrid = F), 
         yaxis = list(title = 'Number allegations'), 
         barmode = 'stack',
         hovermode = 'compare', 
         margin = list(r = 100, b = 100))

p.discipline.by.allegation
gen.plotly.json(p.discipline.by.allegation, "discipline-by-allegation")
