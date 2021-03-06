check.vars(c("uof.for.year"))
title <- "Force by victim sex and race"

########################################################################################################
########################################################################################################
uof.by.sex <- uof.for.year %>% group_by(Citizen.sex, Citizen.race)
count.by.sex.race <- summarize(uof.by.sex, num.uof = n())

p.uof.by.victim.sex.race <- plot_ly(count.by.sex.race, 
                                    x = ~Citizen.sex, y = ~num.uof, 
                                    type = 'bar',  name = ~Citizen.race, 
                                    color = ~Citizen.race) %>%
  
  layout(xaxis = list(showgrid = F, title = F), 
         yaxis = list(title = 'Amount of force (UOF)'), 
         barmode = 'stack',
         legend = list(x = 0, y = -.50),
         hovermode = 'compare')

p.uof.by.victim.sex.race
gen.plotly.json(p.uof.by.victim.sex.race, "uof-by-public-sex-race")
