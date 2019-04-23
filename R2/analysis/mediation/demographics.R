officer.races <- c("Black (23 of 34)", "White (9 of 34)", "Hispanic (2 of 34)")
officer.race.counts <- c(23, 9, 2)

civil.races <- c("Black (16 of 27)", "White (10 of 27)", "Hispanic (1 of 27)")
civil.race.counts <- c(16, 10, 1)

dat <- data.frame(officer.races, civil.races, officer.race.counts, civil.race.counts)

p.mediation.officers.race <- plot_ly(dat,  type = 'pie', name = "Officers by race",
                                labels = ~officer.races, 
                                values = ~officer.race.counts,
                                textposition = 'inside',
                                textinfo = 'label+percent',
                                insidetextfont = list(color = '#FFFFFF'))
p.mediation.officers.race
gen.plotly.json(p.mediation.officers.race, "mediation-by-officer-race")

p.mediation.civil.race <- plot_ly(dat,  type = 'pie', name = "Civilians by race",
                                labels = ~civil.races, 
                                values = ~civil.race.counts,
                                textposition = 'inside',
                                textinfo = 'label+percent',
                                insidetextfont = list(color = '#FFFFFF'))
p.mediation.civil.race
gen.plotly.json(p.mediation.civil.race, "mediation-by-civilian-race")

officer.sexes <- c("Male (28 of 34)", "Female (6 of 34)")
officer.sex.counts <- c(28, 6)

civil.sexes <- c("Male (9 of 27)", "Female (18 of 27)")
civil.sex.counts <- c(9, 18)

dat <- data.frame(sexes, officer.sex.counts, civil.sex.counts)

p.mediation.officer.sex <- plot_ly(dat,  type = 'pie', name = "Officers by sex",
                                   labels = ~officer.sexes, 
                                   values = ~officer.sex.counts,
                                   textposition = 'inside',
                                   textinfo = 'label+percent',
                                   insidetextfont = list(color = '#FFFFFF'))
p.mediation.officer.sex
gen.plotly.json(p.mediation.officer.sex, "mediation-by-officer-sex")

p.mediation.civil.sex <- plot_ly(dat,  type = 'pie', name = "Civilians by sex",
                                   labels = ~civil.sexes, 
                                   values = ~civil.sex.counts,
                                   textposition = 'inside',
                                   textinfo = 'label+percent',
                                   insidetextfont = list(color = '#FFFFFF'))
p.mediation.civil.sex
gen.plotly.json(p.mediation.civil.sex, "mediation-by-civilian-sex")
