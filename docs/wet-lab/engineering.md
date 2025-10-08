# Engineering

## Oleic Acid Synthesis

### Cycle1: Environmental adaptability of Lactobacillus casei

#### Design
In our design, the engineered bacteria colonize and function specifically in the intestinal environment, relying on bile salts present in the gut to activate the responsive switch. However, before this, we need to first verify whether our chosen chassis cells can tolerate the bile salt environment and grow normally, as this is essential for subsequent experiments.

#### Build
We first inoculated wild-type Lactobacillus casei on L.B. solid medium to verify that it can grow normally on L.B. plates. Subsequently, we prepared L.B. solid plates containing 0.1% (w/w), 0.2%, and 0.5% bile salts. We then spread Lactobacillus casei suspensions with the same colony concentration (CFU/ml) onto the plates and maintained the same incubation time to test whether bile salts inhibit the growth of Lactobacillus casei. Additionally, we inoculated Lactobacillus casei into L.B. liquid medium containing the same aforementioned bile salt concentrations and measured OD600 after the same incubation period to construct bacterial growth curves.

#### Test
Our experimental results indicate that there was no significant difference in the number of colonies on solid media with varying bile salt concentrations, suggesting that Lactobacillus casei can grow normally in the presence of bile salt concentrations of at least 0.5%. The bacterial growth curves overlapped, further supporting the conclusion from the colony counts.

![OD values of Lactococcus lactis cultured in media with different concentrations of bile salts](https://static.igem.wiki/teams/5562/engineering/figure-1-od-values-of-lactococcus-lactis-cultured-in-media-with-different-concentrations-of-bile-salts.webp)

**Figure.1** OD values of Lactococcus lactis cultured in media with different concentrations of bile salts.

#### Learn
This round of experiments confirmed that the chassis bacteria can grow normally in an intestinal environment, laying a solid foundation for subsequent engineering iterations.

### Cycle2: Constitutive expression of accA

#### Design
Our engineering goal is to successfully synthesize oleic acid within Lactobacillus casei, which relies on multiple enzymes involved in the fatty acid synthesis process. Acetyl-CoA carboxylase (accA) is a complex multifunctional enzyme system that catalyzes the carboxylation of acetyl-CoA to malonyl-CoA, the rate-limiting step in fatty acid synthesis and an essential precursor reaction for oleic acid production. At the same time, accA also participates in the synthesis of short-chain fatty acids (SCFAs), which serve as important substrates for oleic acid synthesis and are also a key component of prebiotics. To express higher levels of accA in Lactobacillus casei and enhance the rate of oleic acid synthesis, we obtained the accA gene sequence from the Lactobacillus genus using the NCBI Gene database and constructed an expression system regulated by a constitutive promoter.

#### Build
To ensure stable and increased expression of accA, we selected pMG36e as the plasmid backbone. This is a stringent plasmid with pWV01 as its origin of replication, which maintains a relatively low copy number in engineered bacteria, favoring the stable inheritance of the plasmid. The accA gene is expressed under the control of the constitutive promoter Psod. According to published literature, Psod is a moderately strong constitutive promoter capable of stably expressing target genes in engineered bacteria.

![The Lactococcus lactis expression vector for accA in this project](https://static.igem.wiki/teams/5562/engineering/figure-2-the-lactococcus-lactis-expression-vector-for-acca-in-this-project.webp)

**Figure.2** The Lactococcus lactis expression vector for accA in this project.

Using restriction enzyme digestion and ligation, we successfully constructed the Psod-accA plasmid. We then prepared electrocompetent Lactobacillus casei cells using an improved rubidium chloride method to facilitate plasmid transformation. After transformation, we analyzed the plasmid profile of the transformants via nucleic acid gel electrophoresis and assessed the expression of short-chain fatty acids (SCFAs) using liquid chromatography.

#### Test
Agarose gel electrophoresis results showed that the engineered bacteria carrying the Psod-accA plasmid had nucleic acid bands at the expected positions, indicating successful transformation. Liquid chromatography results demonstrated that the SCFAs (acetic acid, propionic acid, and butyric acid) content in the supernatant of the transformant cultures increased several-fold, indicating that stable expression of accA enhanced short-chain fatty acid synthesis.

![Plasmid construction results](https://static.igem.wiki/teams/5562/engineering/figure-3-a-the-plasmid-map-constructed-in-this-section-b.webp)

**Figure.3** A. The Plasmid Map Constructed in This Section. B. Agarose Gel Electrophoresis Map. C. Colony Plating on Antibiotic-Containing Agar Plates. D. Expression Levels of Different Short-Chain Fatty Acids

#### Learn
In this cycle, we successfully completed the design and transformation of the first expression vector. The engineered bacteria successfully expressed accA and enhanced the synthesis of short-chain fatty acids, providing sufficient precursors for the subsequent synthesis of oleic acid.

### Cycle3: Function validation of the bile salt-responsive promoter

#### Design
The expression of exogenous genes can impose survival pressure on engineered bacteria, especially when carried on high-copy-number plasmids, such as the exogenous gene OLE1. Therefore, we plan to activate the expression of exogenous genes only in the intestinal environment. After screening a series of induction conditions, including temperature, glucose concentration, and pH, we determined that bile salt concentration is the optimal strategy for regulating gene expression. This is because bile salts naturally exist in the intestinal environment, making it favorable for the precise functioning of the engineered bacteria.

After extensive literature review, we identified a reported promoter, P16090, in the research by José Alberto Martínez-Fernández et al. This promoter is derived directly from Lactobacillus and is theoretically capable of functioning directly in our chassis cells.

#### Build
We selected a medium-to-high copy number (30-40 copies per transformant) relaxed plasmid backbone, PNZ8048 (kanamycin resistance), as the vector. Using primers reported in the literature, we amplified the P16090 promoter and its upstream transcription factor sequence from the whole genome sequencing data of Lactobacillus. We constructed the P16090-GFP plasmid using restriction enzyme digestion and ligation. Then, we cultured the transformants in L.B. medium with varying concentrations of bile salts and conducted fluorescence intensity quantification to test the function of P16090.

![The vector diagram for verifying the function of the bile-salt-induced promoter](https://static.igem.wiki/teams/5562/engineering/figure-4-the-vector-diagram-for-verifying-the-function-of-the-bile-salt-induced-promoter.webp)

**Figure.4** The vector diagram for verifying the function of the bile-salt-induced promoter

#### Test
Our experimental results indicate that the transformants exhibit two plasmid bands, confirming the successful transformation of the plasmids. In the presence of bile salts, all transformants display fluorescence signals, which increase with the concentration of bile salts.

![Verification results](https://static.igem.wiki/teams/5562/engineering/figure-5-a-the-plasmid-map-constructed-in-this-section-b-agarose-gel-electrophoresis-map-c-colony-plating-on-antibiotic-containing-agar-plates-d-gfp-fluorescence-intensity-corresponding-to-different-bs-concentrations.webp)

**Figure.5** A. The Plasmid Map Constructed in This Section. B. Agarose Gel Electrophoresis Map. C. Colony Plating on Antibiotic-Containing Agar Plates. D. GFP Fluorescence Intensity Corresponding to Different BS Concentrations

#### Learn 
In this iteration, we successfully validated the compatibility of the bile salt promoter in engineered bacteria and its ability to induce gene expression in response to bile salt concentration. This provides a foundation for the gut-responsive synthesis of oleic acid.

### Cycle4: Expression of OLE1 and oleic acid synthesis

#### Design
Stearoyl-CoA 9-desaturase (OLE1) originates from Saccharomyces cerevisiae S288C and is a key rate-limiting enzyme in the desaturation of stearic acid to produce unsaturated oleic acid. Oleic acid is not only a beneficial prebiotic component lacking in the gut but also has multiple functions, such as inhibiting pathogenic microbial growth, enhancing the immune barrier, and boosting the activity of gut probiotics. To enable our engineered bacteria to express oleic acid in the intestinal environment, we first optimized the fatty acid metabolic pathway to enhance the synthesis of oleic acid substrates. We plan to sequence-modify OLE1 and link it downstream of promoter 16090 to facilitate oleic acid synthesis in the gut environment.

#### Build
We first obtained the complete FASTA sequence of OLE1 from the NCBI Gene database. Subsequently, codon optimization was performed based on the codon preference of Lactococcus lactis, avoiding mRNA secondary structures and excluding restriction sites. Additionally, a 6x histidine tag (His) was added downstream of the OLE1 sequence for protein expression identification. Using the plasmid backbone PNZ8048 validated in the previous cycle, we constructed the P16090-OLE1 plasmid through restriction enzyme digestion and ligation. The expression of oleic acid in the engineered bacteria was then analyzed using liquid chromatography, while OLE1-6xHis expression was evaluated through Western blot.

![Dual expression system of OLE1 and DEFB4A](https://static.igem.wiki/teams/5562/engineering/figure-6-dual-expression-system-of-ole1-and-defb4a.webp)

**Figure.6** Dual expression system of OLE1 and DEFB4A

#### Test
Our results indicate that while wild-type Lactococcus lactis shows a baseline level of oleic acid expression, the amount is relatively low. In contrast, engineered bacteria exhibit a significant increase in oleic acid expression. Furthermore, Western blot analysis reveals that OLE1 expression is upregulated in the presence of bile salts, demonstrating that the bile salt-responsive promoter is functioning effectively in our engineered bacteria.

![Experimental results](https://static.igem.wiki/teams/5562/engineering/figure-7-a-the-plasmid-map-constructed-in-this-section-b.webp)

**Figure.7** A. The Plasmid Map Constructed in This Section. B. Agarose Gel Electrophoresis Map. C. Colony Plating on Antibiotic-Containing Agar Plates. D. Western Blot Analysis Map. E. Oleic Acid Concentration in Supernatants of Different Bacterial Cultures.

#### Learn
In this cycle, we successfully constructed engineered Lactococcus lactis capable of expressing OLE1 under the control of a bile salt-inducible promoter. The oleic acid synthesis and secretion pathway of the engineered bacteria were also validated.

## Gut Barrier

### Cycle5: Defensin expression

#### Design
The gut barrier is a critical factor influencing the balance of the gut microbiota and consists of two components: the mucosal barrier and the immune barrier. In cases of gut microbiota dysbiosis, particularly during the perioperative period, the normal gut barrier is disrupted, leading to the overgrowth of pathogenic bacteria, immune imbalance, and ultimately a series of digestive system diseases. Through our research, we identified defensins as a promising candidate. Defensins are functional peptides secreted by host immune cells and intestinal epithelial cells that can inhibit the proliferation of pathogenic bacteria. We selected the DEFB4A sequence and plan to introduce it into engineered bacteria for co-expression with OLE1 in response to bile salt signals.

#### Build
First, we obtained the open reading frame sequence encoding DEFB4A from the Human Genome Project and constructed P16090-OLE1-2AA-DEFB4A using restriction enzyme digestion and ligation. The 2AA sequence is a self-cleaving peptide that facilitates the separation of the fusion protein after the co-expression of OLE1 and DEFB4A, thereby restoring the normal functions of each sequence. Subsequently, we used Western blot to verify whether the new plasmid affects the protein expression from the previous iteration.

#### Test
Our plate spreading and agarose gel electrophoresis results confirmed the successful transformation of the dual plasmids into the chassis cells, indicating the successful construction of the engineered bacteria. Western blot results showed that the coupling of the 2AA self-cleaving peptide and the DEFB4A fragment did not affect the expression of OLE1. Furthermore, the OLE1-specific band was only observed under bile salt conditions. In addition, our inflammation model demonstrated that the culture supernatant of the engineered bacteria alleviated oxidative stress in L-929 cells, suggesting that the defensin-secreting engineered bacteria possess certain anti-inflammatory properties.

![Construction results](https://static.igem.wiki/teams/5562/engineering/figure-8-a-the-plasmid-map-constructed-in-this-section-b-agarose-gel-electrophoresis-map-c-colony-plating-on-antibiotic-containing-agar-plates-d-western-blot-analysis-map.webp)

**Figure.8** A. The Plasmid Map Constructed in This Section. B. Agarose Gel Electrophoresis Map. C. Colony Plating on Antibiotic-Containing Agar Plates. D. Western Blot Analysis Map.

![ROS fluorescence intensity in different groups of cells](https://static.igem.wiki/teams/5562/engineering/figure-9-ros-fluorescence-intensity-in-different-groups-of-cells.webp)

**Figure.9** ROS fluorescence intensity in different groups of cells.

#### Learn
Through this cycle, we successfully enabled the engineered bacteria to express the defensin DEFB4A and verified the stability of the coupling between OLE1 and DEFB4A within a single coding region. Furthermore, we tested the anti-inflammatory activity of the engineered bacteria's culture supernatant and demonstrated its ability to partially eliminate ROS, thereby alleviating oxidative stress in the inflammatory cell model.

## Safety

### Cycle6: Gut environment-based biocontainment system

#### Design
To ensure the biosafety of the engineered bacteria, we considered multiple strategies, focusing on two specific systems. The first system is a toxin-antitoxin suicide switch module based on the Hok/Sok system. In this design, we planned to use a stringent plasmid backbone with a constitutive promoter to express the toxin protein Hok while utilizing the P16090 promoter to express the antitoxin Sok mRNA. This system is responsive to the intestinal environment, ensuring that the engineered bacteria survive only within the gut.

Additionally, we designed a second system regulated by the pheromone Nisin, which functions as a toxin-degradation system. In this setup, the toxin protein Hok is fused with a degradation tag and activated by Nisin, while a constitutive promoter drives the expression of the degradation chaperone protein sspB. This system ensures that the engineered bacteria initiate a self-limiting pathway in the presence of the external signal Nisin.

After conducting an extensive literature review, we ultimately chose Scheme 1, the gut environment-responsive biocontainment system. Scheme 2 was deemed less suitable due to the potential for toxin leakage caused by background expression of Nisin within the gut microbiota, which could impair the normal function of the engineered bacteria. 

We selected the PIP501 plasmid backbone, a low-copy stringent plasmid regulated by the RepR replicon, which allows stable inheritance in Lactobacillus casei. In our design, the Hok fragment was placed downstream of the preca promoter, while the Sok sequence, driven by the P16090 promoter, was inserted in the reverse orientation to establish the toxin/antitoxin system. Specifically, when the engineered bacteria are cultured in bile salt-containing media or colonize the gut environment, both Hok and Sok are expressed simultaneously. The Sok mRNA binds to the Hok mRNA to inhibit its translation, preventing the activation of the suicide system. However, once the engineered bacteria leave the gut environment, Sok expression ceases, and the Hok protein forms pores on the bacterial membrane, leading to controlled cell death of the engineered bacteria.

#### Build
First, we obtained the sequences of Hok and Sok from the literature and performed sequence optimization based on the codon usage bias of Lactobacillus casei. For the adjusted Hok mRNA sequence, we used nucleic acid structure prediction tools to modify the Sok sequence to ensure that its mRNA could effectively bind to Hok mRNA.

![The working principle of the biocontainment system](https://static.igem.wiki/teams/5562/engineering/figure-10-the-working-principle-of-the-biocontainment-system.webp)

**Figure.10** The working principle of the biocontainment system.

Subsequently, we constructed the plasmid <preca-Hok/P16090-Sok/CmR> using the PIP501 plasmid backbone and transformed it into the previously engineered bacteria carrying two plasmids. Following this, we conducted bactericidal curve assays in culture systems with and without bile salts, as well as live/dead bacterial staining, to verify the functionality of the biocontainment system.

#### Test
The results showed that in bile salt-free culture media, the colony count of the engineered bacteria dropped to zero after 8 hours, confirming that the engineered bacteria underwent programmed cell death in the absence of bile salts. Live/dead bacterial staining further validated the bactericidal curve results. Additionally, agarose gel electrophoresis confirmed the presence and expression of all three distinct plasmids within the engineered bacteria.

![Biocontainment system results](https://static.igem.wiki/teams/5562/engineering/figure-11-a-the-plasmid-map-constructed-in-this-section-b-agarose-gel-electrophoresis-map-c-colony-plating-on-antibiotic-containing-agar-plates-d-western-blot-analysis-map.webp)

**Figure.11** A. The Plasmid Map Constructed in This Section. B. Agarose Gel Electrophoresis Map. C. Colony Plating on Antibiotic-Containing Agar Plates. D. Western Blot Analysis Map.

Time-series bactericidal curve analysis demonstrated that the engineered bacteria completely perished within 8 hours after removal from the bile salt environment. This result confirms the effectiveness of the biosafety system we designed.

![Bactericidal curve](https://static.igem.wiki/teams/5562/engineering/figure-12-a-colony-counts-of-engineered-bacteria-at-different-time-points-b-time-series-bactericidal-curve.webp)

**Figure.12** A. Colony Counts of Engineered Bacteria at Different Time Points. B. Time-Series Bactericidal Curve

#### Learn
Through this cycle, we successfully constructed engineered bacteria with fully functional traits and a safety biocontainment system.

