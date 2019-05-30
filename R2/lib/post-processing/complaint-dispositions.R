# Complaints need a single disposition

# Function to recategorize an array of dispositions/findings to a single disposition
SelectDisp <- function(disp) {
  if (any(disp == 'Sustained')) {
    return('Sustained')
  } else if (any(disp == 'Mediation')) {
    return('Mediation')
  } else if (any(disp == 'DI-2')) {
    return('DI-2')
  } else if (any(disp == 'Pending')) {
    return('Pending')
  } else if (any(disp == 'Not Sustained')) {
    return('Not Sustained')
  } else if (any(disp == 'Unfounded')) {
    return('Unfounded')
  } else if (any(disp == 'Exonerated')) {
    return('Exonerated')
  } else if (any(disp == 'NFIM')) {
    return('NFIM')
  } else {
    return('Data Inconsistency')
  } 
}

# Complaints with the same PIB.Control.Number shuold have the same disposition and assignment, so should be 
# effectively the same as getting allegations by unique PIB.Control.Number
complaints.by.officer.for.year <- allegations.for.year %>% 
  distinct(PIB.Control.Number, Officer.primary.key, .keep_all = TRUE)

complaints.for.year <- complaints.by.officer.for.year %>% 
  distinct(PIB.Control.Number, .keep_all = TRUE)

oipm.dispositions <- complaints.by.officer.for.year %>% 
  group_by(PIB.Control.Number) %>% 
  summarise_at(c("Disposition.OIPM.by.officer"), SelectDisp)

oipm.dispositions <- oipm.dispositions %>% mutate(
  Disposition.OIPM = Disposition.OIPM.by.officer
)

complaints.for.year <- merge(complaints.for.year, oipm.dispositions, by = "PIB.Control.Number")
