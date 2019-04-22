races <- c("Black", "White", "Hispanic")
officer.race.counts <- c(23, 9, 2)
civil.race.counts <- c(16, 10, 1)

dat <- data.frame(races, officer.race.counts, civil.race.counts)

p.mediation.officers.race <- plot_ly(dat,  type = 'pie', name = "Officers by race",
                                labels = ~races, 
                                values = ~officer.race.counts,
                                textposition = 'inside',
                                textinfo = 'label+value+percent',
                                insidetextfont = list(color = '#FFFFFF'))
p.mediation.officers.race
gen.plotly.json(p.mediation.officers.race, "mediation-by-officer-race")

p.mediation.civil.race <- plot_ly(dat,  type = 'pie', name = "Civilians by race",
                                labels = ~races, 
                                values = ~civil.race.counts,
                                textposition = 'inside',
                                textinfo = 'label+value+percent',
                                insidetextfont = list(color = '#FFFFFF'))
p.mediation.civil.race
gen.plotly.json(p.mediation.civil.race, "mediation-by-civilian-race")