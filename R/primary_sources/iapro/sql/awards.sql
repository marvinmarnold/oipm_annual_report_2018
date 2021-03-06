with officer as (
	select * from iadata_oipm.ia_adm.officers

)
select

-- Award info
awdt as "Award date",
awcategory as "Award category",
awtype as "Award type",

-- Officer info
o.SEX as "Officer sex",
o.RACE as "Race",
datediff(yy, o.DOB, awdt) as "Officer age at time of award",
datediff(yy, o.HIRE_DT, awdt) as "Officer years exp at time of award",
datediff(yy, o.UNIT_DT_ASSIGNED, awdt) as "Officer years with unit",
o.EMP_TYPE as "Officer type",
o.STATUS as "Officer employment status",
o.UDTEXT24A as "Officer department",
o.UDTEXT24B as "Officer division",
o.UDTEXT24C as "Officer sub-division A",
o.UDTEXT24D as "Officer sub-division B"

from IADATA_OIPM.ia_adm.awards award
left join officer o on o.offnum = award.offnum;