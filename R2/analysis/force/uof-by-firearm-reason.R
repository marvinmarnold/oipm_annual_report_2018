check.vars(c("uof.for.year"))
title <- "UOF by reason"

########################################################################################################
########################################################################################################
title <- "Reason for exhibiting firearm"

firearm.by.reason <- uof.for.year %>% filter(Force.type == "Firearm Exhibited") %>% group_by(Reason.for.force)
count.by.firearm.reason <- summarise(firearm.by.reason, count = n())

p.firearm.by.reason <- plot_ly(count.by.firearm.reason,  type = 'pie', name = title,
                               labels = ~Reason.for.force, 
                               values = ~count,
                               textposition = 'inside',
                               textinfo = 'label+value+percent',
                               insidetextfont = list(color = '#FFFFFF'))
p.firearm.by.reason
