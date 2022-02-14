check.vars(c("adp.for.year", "CURRENT.YEAR"))
title <- "Officers by year"

# From annual report
active.officers.2016 <- 1239
active.officers.2017 <- 1275

########################################################################################################
########################################################################################################
active.officers.2018 <- nrow(adp.for.year)

p.active.officers <- plot_ly(
  x = 2016:CURRENT.YEAR,
  y = c(active.officers.2016, active.officers.2017, active.officers.2018),
  name = "Number active officers",
  type = "bar"
) %>% layout(
  xaxis = list(dtick = 1)
)

p.active.officers
gen.plotly.json(p.active.officers, "officers-by-year")