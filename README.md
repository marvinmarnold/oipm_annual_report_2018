# OIPM 2018 Annual Report
This project contains:

- ***SQL scripts:*** Assumes access to raw NOPD data, not generally available to the public.
The output of these scripts can be found in `R2/data`.
- ***R scripts:*** Transform data in `R2/data` into Plotly compatible JSON.
- ***Gatby based React website:*** Consumes JSON and displays on public website.


## Website

- Develop locally: `gatsby develop`
- Deploy: `npm run deploy`

## R analysis

```
Rscript R2/annual-report-2018.R
```

### Initial setup recreation

1. Setup Gatsby template
	```
	gatsby new gatsby-annual-report https://github.com/gatsbyjs/gatsby-starter-default
	```

2. Install dependencies
	```
	npm install bootstrap plotly plotly.js react-plotly.js reactstrap
	```

3. Import Bootstrap styles. Add this line to the top of `src/components/layout.js`
	```
	import 'bootstrap/dist/css/bootstrap.min.css';
	```
