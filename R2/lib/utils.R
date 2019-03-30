check.var <- function(var.name) {
  if (!exists(var.name)) {
    stop(paste("Variable name", var.name, "must be set."))
  }
}

check.vars <- function(var.names) {
  print.result.to.null.output <- lapply(var.names, check.var)
}

# Hash values to obfuscate underlying IDs
library(digest)
vdigest <- Vectorize(digest)

age.bucket.function <- function(age) {
  if (is.na(age)) {
    'Unknown age'
  } else  if (age < 26) {
    '25 or younger'
  } else if (age >= 26 & age < 31) {
    '26 - 30'
  } else if (age >= 31 & age < 36) {
    '31 - 35'
  } else if (age >= 36 & age < 41) {
    '36 - 40'
  } else if (age >= 41 & age < 46) {
    '41 - 45'
  } else if (age >= 46 & age < 50) {
    '46 - 50'
  } else {
    '51 or older'
  }
}

# Race info from census
# Provided by Jakob and referenced in 2016 annual report (source 2010 census)
# Race
asian <- "Asian / Pacific Islander"
black <- "Black / African American"
white <- "White"
hispanic <- "Hispanic / Latinx"
native <- "Native / Indigenous"
unknown.race <- "Unknown race"
