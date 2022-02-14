title <- "Top DI2"

di2.alleg.by.alleg <- allegations.for.year %>% filter(Disposition.OIPM.by.officer == "DI-2") %>% group_by(Allegation.simple)
di2.count.by.alleg <- summarise(di2.alleg.by.alleg, count = n())

p.top.di2.alleg <- plot_ly(di2.count.by.alleg,  type = 'pie', name = title,
                           labels = ~Allegation.simple, 
                           values = ~count,
                           textposition = 'inside',
                           textinfo = 'label+value+percent',
                           insidetextfont = list(color = '#FFFFFF'))
p.top.di2.alleg
gen.plotly.json(p.top.di2.alleg, "allegations-di2-most-common")
