
officers.by.race.sex <- adp.for.year %>% group_by(Officer.sex, Officer.race)
count.by.officer.sex.race <- summarise(officers.by.race.sex, num = n())


p.officers.by.sex.race <- plot_ly(count.by.officer.sex.race) %>%
  
  # Stacked bars by exp
  add_trace(x = ~Officer.sex, 
            y = ~num, 
            type = 'bar',  
            name = ~Officer.race, 
            color = ~Officer.race) %>%
  
  layout(barmode = 'stack',
         margin = list(b = 150),
         hovermode = 'compare',
         xaxis = list(title = "Gender", 
                      showgrid = F), 
         
         yaxis = list(title = "Number of officers", showgrid = T))

p.officers.by.sex.race
gen.plotly.json(p.officers.by.sex.race, "officers-by-gender-race")

