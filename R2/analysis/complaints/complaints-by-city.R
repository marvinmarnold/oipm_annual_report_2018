complaint.types <- c("Per 100 officers", "Per 10k residents", "Per 1k arrests")
dc.complaints <- c(20.3, 11.2, 24.6)
in.complaints <- c(11.2, 2.1, 4.4)
no.complaints <- c(32.1, 12.4, 24.9)
chi.complaints <- c(30.4, 14.9, 76.9)
complaint.data <- data.frame(complaint.types, dc.complaints, in.complaints, chi.complaints, no.complaints)

p.complaints.by.city <- plot_ly(complaint.data, x = ~complaint.types, y = ~dc.complaints, type = 'bar', name = 'Washington, D.C.') %>%
  add_trace(y = ~in.complaints, name = 'Indianapolis, IN') %>%
  add_trace(y = ~chi.complaints, name = 'Chicago, IL') %>%
  add_trace(y = ~no.complaints, name = 'New Orleans, LA') %>%
  
  layout(
    yaxis = list(title = 'Public complaints'), barmode = 'group',
    xaxis = list(title = FALSE)
  )

p.complaints.by.city
gen.plotly.json(p.complaints.by.city, "complaints-by-city")
