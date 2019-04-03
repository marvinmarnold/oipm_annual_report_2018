########################################################################################################
################################## 2017 ANNUAL REPORT MAIN SCRIPT ######################################

# Reset environment
rm(list = ls())
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

############################################ DATA ######################################################
######### Officers
ADP.CSV.DIRTY <- "raw/data/adp-from-nopd.csv"
ADP.CSV.SANITIZED <- "data/adp-sanitized.csv"

OFFICERS.CSV.DIRTY <- "raw/data/officers-from-nopd.csv"
OFFICERS.CSV.SANITIZED <- "data/officers-sanitized.csv"

######### Use of Force
UOF.CSV.DIRTY <- "raw/data/uof-from-nopd.csv"
UOF.CSV.SANITIZED <- "data/uof-sanitized.csv"

######### Use of Force
STOPS.CSV.DIRTY <- "raw/data/stops.csv"
STOPS.CSV.SANITIZED <- "data/stops-sanitized.csv"

######### Mediation
MEDIATION.CSV.DIRTY <- "raw/data/mediation.csv"

######### Maps
LOUISIANA.JSON <- "data/louisiana.json"

########################################################################################################
######################################## LOAD DEPENDENCIES #############################################
# Load libraries
library(dplyr)
library(plotly)
library(tidyr)
library(geojsonio)
library(maptools)
library(leaflet)

# Local helpers
source("lib/utils.R")

########################################################################################################
############################################# LOAD DATA ################################################

if (RECLEAN_DATA) {
  print("Running sanitizers")
  load.subdirectory("raw/sanitizers")
  
} else {
  adp.for.year <- read.csv(ADP.CSV.SANITIZED, stringsAsFactors = FALSE)
  officers.all <- read.csv(OFFICERS.CSV.SANITIZED, stringsAsFactors = FALSE)
  uof.all <- read.csv(UOF.CSV.SANITIZED, stringsAsFactors = FALSE)
  stops.for.year <- read.csv(STOPS.CSV.SANITIZED, stringsAsFactors = FALSE)
}

uof.for.year <- uof.all %>% filter(year.of.record == CURRENT.YEAR)

# Mediation data doesn't need to be sanitized
mediation.survey.all <- read.csv(MEDIATION.CSV.DIRTY, sep = ";")

########################################################################################################
########################################## PERFORM ANALYSIS ############################################

print("Going to run all analysis")
load.subdirectory("analysis")
