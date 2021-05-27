import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast";

// const tsv_str = `	Name	NameCh	Affiliations	ImgFileName	Description	happyHour	Links
// Keynote	Taiyin Yang	楊台瑩	Executive Vice President, Pharmaceutical Development and Manufacturing, Gilead	Keynote_headshot.jpg 	<p>Taiyin Yang serves as Executive Vice President of Pharmaceutical Development and Manufacturing with responsibility for all the company's investigational compounds and marketed products. Under her leadership, Gilead developed the world's first HIV single tablet regimen and advanced more than 25 compounds from early-stage development to market, reaching millions of people around the world.  <p>Prior to joining Gilead in 1993, Taiyin worked in analytical chemistry at Syntex Corp.</p>  <p>She received her bachelor's degree in chemistry from National Taiwan University and her PhD in organic chemistry from the University of Southern California.</p>	Yes/No	https://www.gilead.com/about/leadership/senior-management/taiyin-yang
// A Reality Check on Becoming Faculty	Hsiao-Ying Monica Wey	魏曉英	Assistant Professor, Massachusetts General Hospital and Harvard Medical School	Academia_Wey.jpg		Yes	https://weylab.martinos.org/
// A Reality Check on Becoming Faculty	Ming-Ru Wu	吳名儒	Assistant Professor, Dana-Farber Cancer Institute and Harvard Medical School	Academia_Ming-Ru_Wu.jpg	My research has been dedicated to integrating synthetic biology, tumor biology, and immunology, to advance cancer immunotherapies. My work has made noteworthy contributions to five areas of cancer immunotherapy: 1) pan-tumor targeting (natural killer cell receptor-based) chimeric antigen receptor (CAR)-T cells; 2) pan-tumor targeting bispecific T cell engagers (BiTEs); 3) tumor targeting nanoparticles; 4) cancer-targeting gene circuits; and 5) machine-learning based platform for high-throughput identification of cancer-specific transcription factor sensor (synthetic promoter). I have published these works, as first or co-first author, in high impact journals including Cell, Gene Therapy, Nanotechnology, and Nature Reviews Cancer. Moreover, my doctoral work (1&2) was acquired by an international biopharma, Celyad, and my postdoctoral work (4&5) was licensed to SentiBio, for further clinical development. ​ My career goal is to harness the tools and design principles of synthetic biology to develop transformative therapies for unmet clinical need. I will first focus on addressing the outstanding challenges in cancer immunotherapy, which include 1) overcoming the lack of ideal targetable tumor surface antigens; 2) mitigating the severe toxicity due to off-target interactions; and 3) overcoming the tumor-mediated immunosuppression.	Yes/No	https://www.syntheticimmunity.net/
// A Reality Check on Becoming Faculty	Wan-Ting Grace Chen		Assistant Professor, University of Massachusetts Lowell	Academia_GraceChen.jpg		No	https://sites.uml.edu/wan-ting-chen/
// A Reality Check on Becoming Faculty	Han-Yu Shih	史涵宇	Tenure track investigator, NIH	Academia_HYShih.jpg	Dr. Shih received her M.S in Microbiology from National Taiwan University in 2006 and Ph.D. in Immunology from Duke University in 2012. As a graduate student, she worked in Dr. Michael Krangel’s lab studying the role of three-dimensional chromatin looping and the key looping factor, CTCF, in gene regulation during thymocyte development. In 2013, she joined John O’Shea’s lab in NIAMS where she began her work on lymphocyte regulomes as a postdoctoral fellow. She received a NIH K22 career development award in 2018 and was jointlt appointed by NEI and NINDS as a Stadtman Tenure-track Investigator in 2019. Her research focuses on understanding the regulation of cytokine loci and immune regulomes in health and neurodegenerative diseases in eye and brain, with an ultimate goal of developing more specific and efficacious therapies.	Yes	https://www.nei.nih.gov/research/research-labs-and-branches/we-are-nei-intramural/han-yu-shih
// A Reality Check on Becoming Faculty	Yu-Chen Tony Tsai	蔡宇承	Assistant Professor-to-be, Washington University at St. Louis	Academia_TTsai.png	Dr. Tony Tsai received a dual degree of M.D. and B.S. (Mathematics) from National Taiwan University. During his Ph.D. training at Stanford University, he combined experiments and mathematical modeling to study feedback mechanisms of embryonic cell cycle and neutrophil chemotaxis. He is currently a postdoctoral fellow at Sean Megason's lab in the Systems Biology department at Harvard Medical School. His work integrated in vivo live imaging, CRISPR genetics, and mathematical modeling in zebrafish embryos to understand how spatial patterns form robustly during development. He will start as an assistant professor at the Department of Developmental Biology at Washington University at St. Louis in January 2021.	Yes	https://www.linkedin.com/in/tony-tsai-80851110/
// Industry session	Steven Chang	張修齊	Senior Analyst, Health Advances	Industry_Steven-Chang.jpg	<p>Steven Chang is a Senior Analyst at Health Advances, a life science strategy consulting firm with practice areas across biopharmaceuticals, medical devices, diagnostics, and digital health. As a strategy consultant, Steven has helped his clients to make high-stake commercial and strategic decisions such as commercialization strategy, R&D prioritization, and commercial due diligence. Steven has extensive experience in several disease areas including oncology, neurological disorder, metabolic disease, and infectious disease..</p>   <p>Prior to joining Health Advances, Steven was a Consultant at Simon-Kucher and Partners and worked primarily on launch pricing and market access strategies for pharmaceuticals. Steven received his PhD in Biological Engineering from MIT. His thesis research focused on understanding the relationship among DNA damage, mutation, and cancer initiation. Steven received his Bachelor of Science in Chemical Engineering with summa cum laude from the University of Illinois at Urbana-Champaign.</p>	Yes	https://www.linkedin.com/in/scschang/
// Industry session	Shianhuey Chiang 	蔣先慧	Director, Head of Emerging Science Biology, Pfizer	Industry_Chiang.jpg	<p>Shian-Huey received her bachelor’s degree from the Department of Agriculture Chemistry, National Taiwan University, and a master’s degree in Biochemistry from National Yang-Ming University in Taiwan.</p>  <p>She received the Ph.D. degree in Cellular and Molecular Biology Program under the supervision of Dr. Alan Saltiel at the University of Michigan, Ann Arbor, studying the insulin signaling pathway. Shian-Huey stayed in Michigan for post-doc and research faculty positions working on obesity and metabolic diseases with mouse models. During her tenure at the University of Michigan, she published numerous first-author papers in Nature, Cell, and Nature Medicine. </p>  <p>Shian-Huey spent 4 years at GlaxoSmithKline in North Carolina, focusing on drug development for muscle-related diseases. She then transitioned to Boston in 2015 for a Research Project Leader position at CTI (Centers for Therapeutic Innovation), leading a collaborative immune project from ESD to the pre-clinical stage at Pfizer. She recently accepted a Director position, leading a new team (ESB) on early stage target validation for various diseases. </p>	Yes/No	https://www.linkedin.com/in/shianhueychiang/
// Industry session	Hank Lin 		Head of Toxicology, Seqirus	Industry_Hank_Lin.jpg		Yes	https://www.linkedin.com/in/hank-lin-7908787/
// Industry session	Hannah Shen	沈敬涵	Director, Asset Acquisition at BridgeBio	Hannah Shen.jpg	Hannah Shen is a Director of Asset Acquisition at BridgeBio Pharma. After graduating from the Biochemical Science & Technology Department at National Taiwan University, she moved to Boston and obtained her PhD in Molecular Biology from Harvard University. Her first job out of graduate school was as employee #17 (and the first PhD hire) at Benchling, a cloud based informatics company, where she focused on sales and marketing. She then shifted to join the business development team at BridgeBio Pharma in January 2018. In her role, she finds and evaluates novel therapies for genetically-defined diseases and precision oncology for the company to acquire and develop. She has been involved in seven new investments that span multiple therapeutic areas, modalities, and stages of development. She likes video chatting with her cat, 布瓜, who lives in Taiwan.		https://www.linkedin.com/in/chinghanshen/`;

const tsv_str = `	Name	NameCh	Affiliations	ImgFileName	Description	happyHour	Links
Keynote	Herren Wu		Senior Vice President and Head of Antibody Discovery and Protein Engineering (ADPE), R&D at AstraZeneca	Keynote_Wu_Herren.jpg		Yes/No	https://www.astrazeneca.com/our-company/our-people/herren-wu.html
Keynote	Jeannie Lee		Professor of Genetics (and Pathology) at Harvard Medical School and Vice Chair of Molecular Biology at the Massachusetts General Hospital	Keynote_JeannieLee.jpeg	<p>Dr. Jeannie T. Lee is a Professor of Genetics (and Pathology) at Harvard Medical School and Vice Chair of Molecular Biology at the Massachusetts General Hospital. Dr. Lee specializes in the study of epigenetic regulation by long noncoding RNAs and uses X-chromosome inactivation as a model system. She is a Member of the National Academy of Sciences, a 2018 Harrington Rare Disease Scholar of the Harrington Discovery Institute, the 2016 recipient of the Lurie Prize from the Foundation for the National Institutes of Health, a 2016 awardee of the Centennial Prize from the Genetics Society of America, a recipient of the Molecular Biology Prize (2010) and the Cozzarelli Prize (2020) from the National Academy of Sciences, U.S.A, and a Fellow of the American Association for the Advancement of Science. Dr. Lee was also named a Distinguished Graduate of the University of Pennsylvania School of Medicine in 2013 and an Investigator of the Howard Hughes Medical Institute. From 2013-2018, she co-launched the Epigenetics Initiative at Harvard Medical School and served as its Co-Director. Serving on the Board of Directors of the Genetics Society of America (GSA), Dr. Lee spearheaded the TAGC (The All-Genetics) Conference in 2016. As GSA's President, Dr. Lee established a Strategic Plan and a Development strategy for the society in 2018. She received her A.B. in Biochemistry and Molecular Biology from Harvard University and obtained M.D.-Ph.D degrees from the University of Pennsylvania School of Medicine. Dr. Lee then carried out postdoctoral work at the Whitehead Institute & MIT and became Chief Resident of Clinical Pathology at the Massachusetts General Hospital prior to joining the Faculty at Harvard Medical School. As a new investigator, she received the Basil O’Connor Scholar Award from the March of Dimes and the Pew Scholars Award. As a champion of translational science, she played a major role in the founding of Translate Bio and Fulcrum Therapeutics. Basic mechanisms in X chromosome inactivation are being translated to better understand and treat Rett Syndrome, Fragile X Syndrome, autism-spectrum disorders, and other X-linked disorders.</p>	Yes/No	https://www.linkedin.com/in/jeannie-t-lee-1a3571b/`;

const tsv_array = tsv_str
	.split('\n')
	.map(el => el.split('\t'))
	.filter(el => el[1])
	.map(el => {
		return {
			'name': el[1].trim() || null,
			'nameCh': el[2] || null,
			'affiliations': el[3] ? el[3].split(';') : [],
			'imgFileName': el[4] || 'placeholder.jpg',
			'links': el[7] ? el[7].split(';') : [],
			'description': el[5] || ''
		};
	});

const tsv_dict = {};

tsv_array.forEach(el => {
	el.name.trim() in Object.keys(tsv_dict)
		? false
		:  tsv_dict[el.name.trim()] = el;
});

export const speakersObj = tsv_dict;
