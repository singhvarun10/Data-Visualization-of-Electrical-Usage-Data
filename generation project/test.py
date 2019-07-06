from tabula import read_pdf
df=read_pdf("report1.pdf")
print(df.head())