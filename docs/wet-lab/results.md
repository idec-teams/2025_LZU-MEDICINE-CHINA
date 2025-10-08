# Oleic Acid Synthesis

## 1\. Environmental adaptability of Lactobacillus casei

First, we tested the environmental compatibility of the chassis cells. We added different concentrations of bile salts into L.B. liquid medium and solid agar plates, followed by inoculating the chassis bacteria. The results showed no significant difference in the OD values of the _Lactobacillus casei_ cultures grown for the same duration in L.B. liquid media containing varying concentrations of bile salts, indicating that the chassis cells can grow normally in the intestinal environment. The results from plate spreading further confirmed this conclusion.

![picture_1](https://static.igem.wiki/teams/5562/result/image1.webp)

**Figure.1** A. The Effect of Different Concentrations of Bile Salts on the OD Value of Chassis Cell Cultures. B. Colony Plating on Agar Containing Different Concentrations of Bile Salts

## 2\. Constitutive expression of accA

To enhance the synthesis of short-chain fatty acids (SCFAs) in the engineered bacteria, thereby providing substrates for subsequent oleic acid production, we designed and constructed the plasmid _&lt;posd-accA/AmpR&gt;_ and introduced it into the chassis cells using the heat-shock transformation method. Agarose gel electrophoresis images confirmed that the engineered bacteria successfully carried the target plasmid. Furthermore, results from liquid chromatography demonstrated that, compared to the _Lactobacillus casei_ chassis, the engineered bacteria transformed with _&lt;posd-accA/AmpR&gt;_ showed higher concentrations of acetate, propionate, and butyrate in the culture supernatant. This indicates that the expression of _accA_ effectively enhanced SCFA synthesis.

![picture_2](https://static.igem.wiki/teams/5562/result/image2.webp)

**Figure.2** A. The Plasmid Map Constructed in This Section. B. Agarose Gel Electrophoresis Map. C. Colony Plating on Antibiotic-Containing Agar Plates. D. Expression Levels of Different Short-Chain Fatty Acids

## 3\. Function validation of the bile salt-responsive promoter

To verify the functionality of the promoter _P16090_, we constructed the plasmid &lt;P16090-GFP/KnaR&gt; based on the lenient PNZ8048 plasmid backbone and transformed it into the engineered bacteria. Agarose gel electrophoresis confirmed the successful transformation of the plasmid into the bacterial cells. Subsequently, the engineered bacteria were inoculated into L.B. liquid medium containing different concentrations of bile salts, and GFP fluorescence emission at 507 nm was measured. The results showed that a bile salt concentration of 0.1% effectively activated GFP expression, and the engineered bacteria exhibited a significant fluorescence signal under this condition.

![picture_3](https://static.igem.wiki/teams/5562/result/image3.webp)

**Figure.3** A. The Plasmid Map Constructed in This Section. B. Agarose Gel Electrophoresis Map. C. Colony Plating on Antibiotic-Containing Agar Plates. D. GFP Fluorescence Intensity Corresponding to Different BS Concentrations.

## 4\. Expression of OLE1 and oleic acid synthesis

To express and monitor the key enzyme OLE1 for oleic acid synthesis in engineered bacteria, we optimized the _OLE1_ sequence from _Saccharomyces cerevisiae_ and fused it with a C-terminal 6xHis tag. We then replaced the _GFP_ sequence in the plasmid _&lt;P16090-GFP/KnaR&gt;_ with the optimized _OLE1_ sequence, constructing the plasmid _&lt;P16090-OLE1/KnaR&gt;_. Colony screening and agarose gel electrophoresis confirmed the successful transformation of the target plasmid into the engineered bacteria.

To validate protein expression, we analyzed OLE1 expression under conditions with and without the addition of bile salts. The results showed that, compared to the chassis cells and engineered bacteria without bile salts, the engineered bacteria displayed significant OLE1 protein expression when bile salts were present. Furthermore, liquid chromatography results indicated an upregulation in both oleic acid and short-chain fatty acid production in the culture supernatant of the engineered bacteria.

![picture_4](https://static.igem.wiki/teams/5562/result/image4.webp)

**Figure.4** A. The Plasmid Map Constructed in This Section. B. Agarose Gel Electrophoresis Map. C. Colony Plating on Antibiotic-Containing Agar Plates. D. Western Blot Analysis Map. E. Oleic Acid Concentration in Supernatants of Different Bacterial Cultures.

## 5\. Defensin expression

To express defensin in the engineered bacteria, we fused a self-cleaving 2A peptide sequence (2AA) and the DEFB4A sequence downstream of the OLE1 coding region in the plasmid _&lt;P16090-OLE1/KnaR&gt;_. This design allows OLE1 and DEFB4A to be expressed within the same operon. Colony screening and agarose gel electrophoresis confirmed the successful transformation of the target plasmid into the engineered bacteria.

![picture_5](https://static.igem.wiki/teams/5562/result/image5.webp)

**Figure.5** A. The Plasmid Map Constructed in This Section. B. Agarose Gel Electrophoresis Map. C. Colony Plating on Antibiotic-Containing Agar Plates. D. Western Blot Analysis Map.

We then conducted a Western blot assay to verify whether the inclusion of the DEFB4A sequence affected OLE1 expression. The results demonstrated that the presence of the DEFB4A sequence did not impair bile salt-induced OLE1 expression. Furthermore, a cellular inflammation model indicated that the culture supernatant from the engineered bacteria reduced reactive oxygen species (ROS) levels and suppressed cellular inflammation.

![picture_6](https://static.igem.wiki/teams/5562/result/image6.webp)

**Figure.6** ROS fluorescence intensity in different groups of cells.

## 6\. Gut environment-based biocontainment system

To enhance the biosafety of the engineered bacteria, we designed a Hol/Sok toxin-antitoxin system regulated by the P16090 promoter. This system enables the engineered bacteria to initiate a self-limiting mechanism, promoting apoptosis when they exit the intestinal environment. To achieve this, we constructed the plasmid _&lt;Preca-Hok/P16090-Sok/CmR&gt;_. Colony screening and agarose gel electrophoresis confirmed the successful transformation of the target plasmid into the engineered bacteria.

![picture_7](https://static.igem.wiki/teams/5562/result/image7.webp)

**Figure.7** A. The Plasmid Map Constructed in This Section. B. Agarose Gel Electrophoresis Map. C. Colony Plating on Antibiotic-Containing Agar Plates. D. Western Blot Analysis Map.

Time-series bactericidal curve analysis demonstrated that the engineered bacteria completely perished within 8 hours after removal from the bile salt environment. This result confirms the effectiveness of the biosafety system we designed.

![picture_8](https://static.igem.wiki/teams/5562/result/image8.webp)

**Figure.8** A. Colony Counts of Engineered Bacteria at Different Time Points. B. Time-Series Bactericidal Curve