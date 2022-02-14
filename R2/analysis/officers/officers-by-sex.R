check.vars(c("adp.for.year", "CURRENT.YEAR"))
title <- "Officers by sex"

########################################################################################################
########################################################################################################
officers.by.sex <- adp.for.year %>% group_by(Officer.sex)
count.by.sex <- summarize(officers.by.sex, num.uof = n())
count.by.sex

p.officers.by.sex <- plot_ly(count.by.sex, labels = ~Officer.sex, values = ~num.uof, type = 'pie',
                             textposition = 'inside',
                             textinfo = 'label+value+percent',
                             insidetextfont = list(color = '#FFFFFF')) %>%
  
  layout(hovermode = 'compare', showlegend = TRUE, legend = list(x = 0, y = -.50))

p.officers.by.sex
gen.plotly.json(p.officers.by.sex, "officers-by-sex")