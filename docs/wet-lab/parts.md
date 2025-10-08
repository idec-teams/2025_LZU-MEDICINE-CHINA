# **1. Overall**

Our project aims to address perioperative gut microbiota dysbiosis
through the use of engineered probiotics. To achieve this, we have
designed or optimized several foundational genetic components that
collectively form a complete system capable of intelligently sensing the
intestinal environment, precisely executing therapeutic functions, and
ensuring biosafety.First, we utilized the bile salt-responsive
promoter P16090 (BBa_25S2TG5Z), derived from *Lactobacillus*. This
promoter specifically responds to bile salt signals in the gut, ensuring
that downstream genes are only activated in the target environment. We
identified this promoter as the core regulatory switch of the entire
system, establishing the foundation for the targeted functional
expression of engineered probiotics within the gut.

In terms of metabolic pathways, we selected the accA gene
(BBa_25ZF6KGL), also sourced from *Lactobacillus*. This gene encodes
acetyl-CoA carboxylase, the rate-limiting enzyme in fatty acid
biosynthesis, which significantly enhances the engineered bacteria\'s
ability to synthesize short-chain fatty acids (SCFAs). Additionally, we
introduced the OLE1 gene (BBa_25CA4F5T) from *Saccharomyces
cerevisiae* and optimized its codons for expression in *Lactobacillus*.
This gene encodes Δ9-fatty acid desaturase, which converts short-chain
fatty acids into oleic acid.

To further enhance the antimicrobial activity of the engineered
bacteria, we integrated the coding sequence of DEFB4A (BBa_25VPY4CG), a
human defensin. This antimicrobial peptide effectively inhibits the
growth of conditional pathogens, and its unique membrane-perforating
mechanism minimizes the risk of resistance development in pathogenic
bacteria.

More importantly, we innovatively combined these functional components
to construct a multifunctional fused expression unit (BBa_25NBMOAR).
This unit utilizes a 2A self-cleaving peptide to link OLE1 and DEFB4A,
enabling the co-expression of these two genes within a single
transcript. This allows the engineered probiotics to perform dual roles
of \"repair\" and \"defense\" simultaneously.

Furthermore, we uploaded the stringent plasmid
backbone PIP501 (BBa_251CFLR3) used in our system. This backbone, which was previously unavailable in the iDEC Registry, is expected to serve as a valuable resource for future teams working on similar projects.

|              |             |                                                                                                                                                                                                                                     |
| ------------ | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BBa_25CA4F5T | Coding      | The original sequence is sourced from the NCBI database (NC_001139.9) and has been modified by our team.                                                                                                                            |
| BBa_25ZF6KGL | Coding      | The original sequence is sourced from the NCBI database, ID: 45549165                                                                                                                                                               |
| BBa_25S2TG5Z | Promoter    | The original sequence was sourced from the genome of Lactobacillus casei in the NCBI database. Using the primer sequences described in the literature (DOI: 10.1007/s00253-019-09743-w), we retrieved and modified this fragment. |
| BBa_25S2TG5Z | Coding      | The original sequence was sourced from the NCBI database (NC_000008.11) and was optimized by our team.                                                                                                                              |
| BBa_25NBMOAR | Measurement | This sequence was designed and measured by our team.                                                                                                                                                                                |
| BBa_251CFLR3 | Plasmid     | The original sequence was sourced from the ATCC database.                                                                                                                                                                           |

---

# **2. Basic Part**

## **BBa_25CA4F5T**

This part encodes stearoyl-CoA 9-desaturase (OLE1), which is a key
component of our project. In Saccharomyces cerevisiae, OLE1 catalyzes
the desaturation of 18-carbon saturated stearic acid, derived from the
fatty acid metabolic pathway, to produce oleic acid.

The original sequence of OLE1 was obtained from the NCBI database. We
first assessed its suitability for prokaryotic expression. Subsequently,
certain codons were optimized based on the codon usage preference
of Lactococcus lactis and the requirements for plasmid construction.
Additionally, a 6xHis tag was added to the C-terminus of the protein to
facilitate its identification and validation during protein expression.
(For more details, please refer to BBa_25CA4F5T).

![picture_1](https://static.igem.wiki/teams/5562/project/1.webp)

**Figure.1** The nucleotide sequences of OLE1 before and after optimization

![picture_2](https://static.igem.wiki/teams/5562/project/2.webp)

**Figure.2** Expression of OLE1 with a 6xHis tag in engineered bacteria

![picture_3](https://static.igem.wiki/teams/5562/project/3.webp)

**Figure.3** Expression of acetic acid,
propionic acid, butyric acid, and oleic acid in engineered bacteria

## **BBa_25ZF6KGL**

This part encodes the acetyl-CoA carboxylase carboxyltransferase subunit
alpha (accA). In our engineered bacteria, accA plays a crucial role in
enhancing the fatty acid synthesis pathway, resulting in the production
of higher quantities of short-chain fatty acids (e.g., acetate,
propionate, butyrate). These short-chain fatty acids serve as essential
precursors, ensuring a sufficient substrate supply for downstream oleic
acid synthesis. (For more details, please refer to BBa_25ZF6KGL).

## **BBa_25S2TG5Z**

This part encodes the promoter 16090 (P16090) along with its upstream
operator sequence. P16090 is a bile salt-responsive promoter derived
from Lactobacillus. In Lactococcus lactis, it can be directly utilized
for constructing expression vectors. Under bile salt conditions,
transcription factors bind to the regulatory sequences upstream of the
promoter, triggering the transcription of downstream genes. (For more
details, please refer to BBa_25S2TG5Z).

## **BBa_25VPY4CG**

This part encodes defensin DEFB4A, derived from the human genome.
Defensins are natural peptides present in the gut with functions such as
antimicrobial activity, inflammation clearance, and immune balance
regulation. In our project, DEFB4A was successfully expressed in
engineered bacteria, and an inflammatory cell model was established to
evaluate the anti-inflammatory functions of the secreted products from
the engineered bacteria. (For more details, please refer
to BBa_25VPY4CG).

## **BBa_25NBMOAR**

This part encodes our designed functional
sequence, P16090-RBS-OLE1-2AA-DEFB4A-Terminator, which has been
rigorously characterized. Integration of this sequence into an
appropriate expression vector enables the engineered bacteria to
express OLE1 and DEFB4A under bile salt conditions while maintaining
their expected functionality. (For more details, please refer
to BBa_25NBMOAR).

## **BBa_251CFLR3**

This part represents the plasmid backbone sequence of PIP501, a
stringent vector originating from Enterococcus faecium. It is capable of
driving gene expression in various microorganisms,
including Lactobacillus. Our team utilized this vector to construct the
biosafety system. (For more details, please refer to BBa_251CFLR3).
