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

sexes <- c("Male", "Female")
officer.sex.counts <- c(28, 6)
civil.sex.counts <- c(9, 18)

dat <- data.frame(sexes, officer.sex.counts, civil.sex.counts)

p.mediation.officer.sex <- plot_ly(dat,  type = 'pie', name = "Officers by sex",
                                   labels = ~sexes, 
                                   values = ~officer.sex.counts,
                                   textposition = 'inside',
                                   textinfo = 'label+value+percent',
                                   insidetextfont = list(color = '#FFFFFF'))
p.mediation.officer.sex
gen.plotly.json(p.mediation.officer.sex, "mediation-by-officer-sex")

p.mediation.civil.sex <- plot_ly(dat,  type = 'pie', name = "Civilians by sex",
                                   labels = ~sexes, 
                                   values = ~civil.sex.counts,
                                   textposition = 'inside',
                                   textinfo = 'label+value+percent',
                                   insidetextfont = list(color = '#FFFFFF'))
p.mediation.civil.sex
gen.plotly.json(p.mediation.civil.sex, "mediation-by-civilian-sex")
