force.types <- c("Per 100 officers", "Per 10k residents", "Per 1k arrests")
dc.force <- c(32.3, 18, 39)
austin.force <- c(182.9, 35, 79)
indianapolis.force <- c(89.5, 16, 33)
no.force <- c(83.7, 32, 65)

force.data <- data.frame(force.types, dc.force, austin.force, indianapolis.force, no.force)

p.force.by.city <- plot_ly(force.data, x = ~force.types, y = ~dc.force, type = 'bar', name = 'Washington, D.C.') %>%
  add_trace(y = ~austin.force, name = 'Austin, TX') %>%
  add_trace(y = ~indianapolis.force, name = 'Indianapolis, IN') %>%
  add_trace(y = ~no.force, name = 'New Orleans, LA') %>%
  
  layout(
    yaxis = list(title = 'Amount of force (UOF)'), barmode = 'group',
    xaxis = list(title = FALSE)
  )

p.force.by.city
gen.plotly.json(p.force.by.city, "uof-by-city")
