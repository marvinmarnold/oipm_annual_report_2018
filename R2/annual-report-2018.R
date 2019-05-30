########################################################################################################
################################## 2018 ANNUAL REPORT MAIN SCRIPT ######################################

# Reset environment
rm(list = ls())
setwd("/home/pili/code/oipm/annual-report-2018/R2")
print(paste("Working directory set to:", getwd()))
readRenviron(".Renviron")

########################################################################################################
######################################## GLOBAL VARIABLES ##############################################
#setwd("/home/pili/code/oipm/annual-report-2018/")

# The current year to analyze
IAPRO.FIRST.YEAR <- 2016
CURRENT.YEAR <- 2018
PLOTLY.OUTPUT.PATH <- "../src/data/"

# If source data is available, set to true.
# If the only data available is coming from a public repository, this should probably be set to false.
RECLEAN_DATA <- FALSE

# Will force all the graphs to recompute
REGEN_ANALYSIS <- FALSE

CSV_SEP <- ";"

############################################ DATA ######################################################
######### Officers
ADP.CSV.DIRTY <- "raw/data/adp-from-nopd.csv"
ADP.CSV.SANITIZED <- "data/adp-sanitized.csv"

OFFICERS.CSV.DIRTY <- "raw/data/officers-from-nopd.csv"
OFFICERS.CSV.SANITIZED <- "data/officers-sanitized.csv"

######### Use of Force
UOF.CSV.DIRTY <- "raw/data/uof-from-nopd-2.csv"
UOF.CSV.SANITIZED <- "data/uof-sanitized.csv"

UOF.2015.CSV.DIRTY <- "raw/data/uof-2015-from-nopd.csv"
UOF.2015.CSV.SANITIZED <- "data/uof-2015-sanitized.csv"

######### Allegations
ALLEGATIONS.CSV.DIRTY <- "raw/data/allegations-from-nopd-2.csv"
ALLEGATIONS.CSV.SANITIZED <- "data/allegations-sanitized.csv"

ACTIONS.TAKEN.CSV.DIRTY <- "raw/data/discipline-from-nopd.csv"
ACTIONS.TAKEN.CSV.SANITIZED <- "data/discipline-sanitized.csv"

######### Stops
STOPS.CSV.DIRTY <- "raw/data/stops.csv"
STOPS.CSV.SANITIZED <- "data/stops-sanitized.csv"

######### Mediation
MEDIATION.CSV.DIRTY <- "raw/data/mediation.csv"
MEDIATION.JSON.SANITIZED <- paste0(PLOTLY.OUTPUT.PATH, "mediation-survey-sanitized.json")

######### Maps
LOUISIANA.JSON <- "data/louisiana.json"

######### OPSO
JFI12M.TXT.DIRTY <- "raw/data/opso/JFI15M_UTF8.TXT"
JFI12MC.TXT.DIRTY <- "raw/data/opso/JFI15MC_UTF8.TXT"
JFI12M.CSV.SANITIZED <- "data/bookings-sanitized.csv"
JFI12MC.CSV.SANITIZED <- "data/charges-sanitized.csv"

########################################################################################################
######################################## LOAD DEPENDENCIES #############################################
# Load libraries
library(dplyr)
library(plotly)
library(tidyr)
#library(geojsonio)
#library(maptools)
#library(leaflet)

# Local helpers
source("lib/helpers/utils.R")

########################################################################################################
############################################# LOAD DATA ################################################

if (RECLEAN_DATA) {
  print("Running sanitizers")
  load.subdirectory("raw/sanitizers")
  
} else {
  adp.for.year <- read.csv(ADP.CSV.SANITIZED, stringsAsFactors = FALSE)
  officers.all <- read.csv(OFFICERS.CSV.SANITIZED, stringsAsFactors = FALSE, sep = CSV_SEP)
  uof.all <- read.csv(UOF.CSV.SANITIZED, stringsAsFactors = FALSE, sep = CSV_SEP)
  uof.reported.2015 <- read.csv(UOF.2015.CSV.SANITIZED, stringsAsFactors = FALSE, sep = CSV_SEP)
  stops.for.year <- read.csv(STOPS.CSV.SANITIZED, stringsAsFactors = FALSE)
  allegations.all <- read.csv(ALLEGATIONS.CSV.SANITIZED, stringsAsFactors = FALSE, sep = CSV_SEP)
  actions.taken.all <- read.csv(ACTIONS.TAKEN.CSV.SANITIZED, stringsAsFactors = FALSE, sep = CSV_SEP)
}

actions.taken.for.year <- actions.taken.all %>% filter(Action.taken.year == CURRENT.YEAR)
uof.for.year <- uof.all %>% filter(year.of.record == CURRENT.YEAR)
allegations.for.year <- allegations.all %>% filter(year.of.record == CURRENT.YEAR)

# Complaint dispositions are not straightforward to calculate
# The findings of all related allegations must be combined in an ordered way
source("lib/post-processing/complaint-dispositions.R")

########################################################################################################
########################################## PERFORM ANALYSIS ############################################

if (REGEN_ANALYSIS) {
  print("Going to run all analysis")
  load.subdirectory("analysis")
}

