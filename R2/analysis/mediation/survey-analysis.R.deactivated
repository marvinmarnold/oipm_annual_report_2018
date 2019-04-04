check.vars(c("mediation.survey.all"))

comm.survey <- mediation.survey.all %>% filter(Type == "Community")

responses <- comm.survey %>% select(Agree, No.opinion, Disagree)
Response <- colnames(responses)
survey.data <- data.frame(Response)

p.comm.survey <- plot_ly(comm.survey, x = ~Text, type = 'bar')


questions <- comm.survey$Text

#df <- data.frame(text = question)

#x.comm.survey <- t(comm.survey)
#colnames(x.comm.survey) <- questions
#comm.survey[questions]

#Animals <- c("giraffes", "orangutans", "monkeys")
#SF_Zoo <- c(20, 14, 23)
#LA_Zoo <- c(12, 18, 29)
#data <- data.frame(Animals, SF_Zoo, LA_Zoo)

#p <- plot_ly(data, x = ~Animals, y = ~SF_Zoo, type = 'bar', name = 'SF Zoo') %>%
#  add_trace(y = ~LA_Zoo, name = 'LA Zoo') %>%
#  layout(yaxis = list(title = 'Count'), barmode = 'stack')