check.vars(c("adp.for.year", "CURRENT.YEAR"))
title <- "Officers by race"

########################################################################################################
########################################################################################################

officers.by.race <- adp.for.year %>% mutate(
  Officer.race = as.character(Officer.race)
) %>% group_by(Officer.race)
count.by.race <- summarize(officers.by.race, num.officers = n())
count.by.race

p.officers.by.race <- plot_ly(count.by.race, labels = ~Officer.race, 
                              values = ~num.officers, 
                              type = 'pie',
                              textposition = 'inside',
                              textinfo = 'label+value+percent',
                              insidetextfont = list(color = '#FFFFFF')) %>%
  
  layout(hovermode = 'compare', showlegend = TRUE, legend = list(x = 0, y = -.50))

p.officers.by.race
gen.plotly.json(p.officers.by.race, "officers-by-race")