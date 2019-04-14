check.vars(c("mediation.survey.all"))

comm.survey <- mediation.survey.all %>% filter(Type == "Community")

survey.by.answer <- comm.survey %>% group_by(Text, Agree, No.opinion, Disagree)
melted.survey <- reshape2::melt(survey.by.answer, id=2:3, measure=4:6)
agreements <- c("Agree", "No opinion", "Disagree")

p.survey.by.answer <- plot_ly(melted.survey,
                              x = ~Text,
                              y = ~value,
                              type = 'bar', orientation = 'h',
                              name = ~variable,
                              color = ~variable
  
) %>%
  
  layout(xaxis = list(title = "Community member responses", 
                      showgrid = F), 
         yaxis = list(title = 'Number of responses'), 
         barmode = 'stack',
         hovermode = 'compare')
p.survey.by.answer

# https://plot.ly/r/horizontal-bar-charts/