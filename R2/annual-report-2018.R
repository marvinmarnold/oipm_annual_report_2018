########################################################################################################
################################## 2017 ANNUAL REPORT MAIN SCRIPT ######################################

# Reset environment
rm(list = ls())

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

######### Use of Force
UOF.CSV.DIRTY <- "raw/data/uof-from-nopd.csv"
UOF.CSV.SANITIZED <- "data/uof-sanitized.csv"

########################################################################################################
######################################## LOAD DEPENDENCIES #############################################
# Load libraries
library(dplyr)
library(plotly)

# Local helpers
source("lib/utils.R")

# Helper function to write Plotly JSON
gen.plotly.json <- function(p, name) {
  p.json <- plotly::plotly_json(config(p, collaborate = FALSE), FALSE)  
  write(p.json, paste0(PLOTLY.OUTPUT.PATH, name, ".json"))
}

########################################################################################################
############################################# LOAD DATA ################################################

if (RECLEAN_DATA) {
  source("raw/sanitizers/sanitizer.R")
} else {
  adp.for.year <- read.csv(ADP.CSV.SANITIZED, stringsAsFactors = FALSE)
  uof.all <- read.csv(UOF.CSV.SANITIZED, stringsAsFactors = FALSE)
  uof.for.year <- uof.all %>% filter(year.of.record == CURRENT.YEAR)
}
########################################################################################################
########################################## PERFORM ANALYSIS ############################################

source("analysis/force/force-analysis.R")

