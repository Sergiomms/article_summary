import { useEffect, useRef } from 'react'
import './Texts.css'

export default function Texts({ savedNumber }) {

  const array1to60 = [
    {
      id: 1,
      title: `. Mikhailova E, Popov A, Roumiantseva J, et al. Blinatumomab as postremission therapy
          replaces consolidation and substantial parts of maintenance chemotherapy and results
          in stable MRD negativity in children with newly diagnosed B-lineage ALL. Journal for
          immunotherapy of cancer. 2024;12(6).`,
      resume: `The bispecific T cell-binding antibody blinatumomab (CD19/CD3) is widely and successfully used for the
          treatment of children with relapsed or refractory B-cell precursor acute lymphoblastic leukemia (BCP-ALL). Here,
          we report the efficacy of a single course of blinatumomab instead of consolidation chemotherapy to eliminate minimal
          residual disease (MRD) and maintain stable MRD-negativity in children with primary BCP-ALL.Between February
          2020 and November 2022, 177 children with non-high-risk BCP-ALL were enrolled in the ALL-MB 2019 pilot study
          (NCT04723342). Patients received the usual risk-adapted induction therapy according to the ALL-MB 2015 protocol.
          Those who achieved a complete remission at the end of induction (EOI) received treatment with blinatumomab
          immediately after induction at a dose of 5 μg/m2/day for 7 days and 21 days at a dose of 15 μg/m2/day, followed
          by 12 months of maintenance therapy. MRD was measured using multicolor flow cytometry (MFC) at the EOI, then
          immediately after blinatumomab treatment, and then four times during maintenance therapy at 3-month intervals.
          All 177 patients successfully completed induction therapy and achieved a complete hematological remission. In 174
          of these, MFC-MRD was measured at the EOI. 143 patients (82.2%) were MFC-MRD negative and the remaining 31
          patients had varying degrees of MFC-MRD positivity. MFC-MRD was assessed in all 176 patients who completed the
          blinatumomab course. With one exception, all patients achieved MFC-MRD negativity after blinatumomab, regardless
          of the MFC-MRD score at EOI. One adolescent girl with high MFC-MRD positivity at EOI remained MFC-MRD positive.
          Of 175 patients who had completed 6 months of maintenance therapy, MFC-MRD data were available for 156 children.
          Of these, 155 (99.4%) were MFC-MRD negative. Only one boy with t(12;21) (p13;q22)/ETV6::RUNX1 became MFCMRD
          positive again. The remaining 174 children had completed the entire therapy. MFC-MRD was examined in 154 of
          them, and 153 were MFC-MRD negative. A girl with hypodiploid BCP-ALL showed a reappearance of MFC-MRD with
          subsequent relapse.In summary, a single 28-day course of blinatumomab immediately after induction, followed by 12
          months of maintenance therapy, is highly effective in achieving MRD-negativity in children with newly diagnosed nonhigh
          risk BCP-ALL and maintaining MRD-negative remission at least during the treatment period.`
    },
    {
      id: 2,
      title: `. Hodder A, Mishra AK, Enshaei A, et al. Blinatumomab for first-line treatment of children
              and young persons with B-ALL. Journal of Clinical Oncology. 2024;42(8):907-914.`,
      resume: `PURPOSE We tested whether blinatumomab (Blina) is effective as a toxicity-sparing alternative to first-line
intensive chemotherapy in children and young persons (CYP) with B-ALL who were chemotherapy-intolerant or chemotherapy-
resistant. METHODS Data were collected for consecutive CYP (age 1-24 years) with Philadelphia chromosome-
positive or Philadelphia chromosome-negative B-ALL who received Blina as first-line therapy. Blina was given
as replacement for postremission intensive chemotherapy to patients with chemotherapy intolerance or resistance.
Blina responders received further chemotherapy (Blin-CT) or first remission hematopoietic stem-cell transplant (Blin-
HSCT) if indicated. Event-free survival (EFS) and overall survival (OS) of the Blin-CT group were compared with those of
matched controls treated with standard chemotherapy in the UKALL 2003 trial. Events were defined as death, relapse,
or secondary cancer. RESULTS From February 2018 to February 2023, 105 patients were treated, of whom 85 were in
the Blin-CT group and 20 were in the Blin-HSCT group. A majority of Blin-CT patients received Blina for chemotherapy
intolerance (70 of 85, 82%), and the group had a higher-risk profile than unselected patients with B-ALL. Blina was
well tolerated with only one patient having a grade 3/4-related toxicity event, and of the 60 patients who were minimal
residual disease-positive pre-Blina, 58 of 60 (97%) responded. At a median follow-up of 22 months, the 2-year outcomes
of the 80 matched Blin-CT group patients were similar to those of 192 controls (EFS, 95% [95% CI, 85 to 98]
v 90% [95% CI, 65 to 93] and OS, 97% [95% CI, 86 to 99] v 94% [95% CI, 89 to 96]). Of the 20 in the HSCT group,
three died because of transplant complications and two relapsed. CONCLUSION Blina is safe and effective in first-line
treatment of chemotherapy-intolerant CYP with ALL.`
    },
    {
      id: 3,
      title: `. Karachunskiy AI, Rumyantseva YV, Zharikova LI, et al. Bispecific monoclonal antibody
blinatumomab in the first-line therapy of B-lineage acute lymphoblastic leukemia in children
and adolescents: Interim results of the russian ministry of health approbation protocol.
Pediatric Hematology/Oncology and Immunopathology. 2024;23(1):14-24.`,
      resume: `The bispecific monoclonal antibody blinatumomab (CD19/CD3) is widely and successfully used to treat children
with relapsed/ refractory B-cell precursor acute lymphoblastic leukemia (BCP-ALL). Advances have also led to the
use of immunotherapy in children with primary BCP-ALL. This paper presents the effectiveness of a single blinatumomab
course instead of consolidation chemotherapy and with short maintenance therapy in primary BCP-ALL patients.
The study was approved by the Independent Ethics Committee and the Scientific Council of the Dmitry Rogachev National
Medical Research Center of Pediatric Hematology, Oncology and Immunology. Between February 2020 and November
2022, 165 children with non-high-risk BCP-ALL (according to clinical stratification criteria defined in the study)
were enrolled in the ALL-MB 2019 pilot study (NCT04723342). Patients received conventional risk-adapted induction
therapy according to the ALL-MB 2015 protocol. Those who achieved complete morphological remission at the end of
induction received 15 μg/m2/day of blinatumomab immediately after induction for 4 weeks, followed by 12 months of
maintenance therapy. Minimal residual disease (MRD) was measured using multicolor flow cytometry at the end of induction,
then immediately after blinatumomab course, and then four times during maintenance therapy at threemonth
intervals. All 165 patients successfully completed induction therapy and achieved complete hematological remission.
All had their MRD measured at the end of induction. One hundred thirty-six (82.2%) patients were MRD-negative,
and the remaining 29 patients showed various levels of MRD positivity. MRD was assessed in all 164 patients who
completed the blinatumomab course. One patient had blinatumomab discontinued due to acute neurotoxicity and was
subsequently treated according to the intermediate-risk ALL-MB 2015 protocol. All but one patient achieved MRD
negativity after blinatumomab course, regardless of MRD value at the end of induction. One adolescent girl with a high
MRD level after induction remained MRD positive after blinatumomab course and further received high-risk therapy
with allogeneic hematopoietic stem cell transplantation. At the time of analysis, 162 children had completed all therapy,
including 12 months of maintenance. MRD was examined in 151 of them, and all were MRD negative. Over a 4-year
study period with a median follow-up of 2.5 years, 10 relapses were registered: 4 in the standard-risk group and 6 in
the intermediate-risk group. The 4-year event-free survival was 89.1 ± 3.7% for all patients, 92.0 ± 4.2% and 82.8
± 8.1% for the standard and intermediate risk groups, respectively. At the time of analysis, all patients were alive; no
deaths were registered. Although the presented results are preliminary and more time is needed for definitive conclusions,
a 4-week 15 μg/m2/day blinatumomab course immediately after induction followed by 12 months of maintenance
therapy is effective in achieving and maintaining MRD negativity in children with non-high risk BCP-ALL. This
study showed the fundamental possibility of treating ALL by combining immunotherapy with the bispecific monoclonal
antibody blinatumomab with a significant chemotherapy reduction.`
    },
    {
      id: 4,
      title: `. Schrappe M, Locatelli F, Valsecchi MG, et al. Pediatric patients with high-risk B-cell
ALL in first complete remission may benefit from less toxic immunotherapy with blinatumomab
- results from randomized controlled phase 3 trial AIEOP-BFM ALL 2017. Blood.
2023;142:825.`,
      resume: `Background: One of the key questions in trial AIEOP-BFM ALL 2017 focused on the reduction of treatment-related
complications by replacing parts of the highly intensive consolidation phase by two courses of Blinatumomab
(Blina) in a prospective randomized trial. Herein, we report the toxicity profile of B-cell acute lymphoblastic leukemia
(B-ALL) patients (pts) with high-risk (HR) characteristics pending final outcome data. Patients and Methods: 728 pts
with HR B-ALL were enrolled from July 15, 2018 to October 31, 2022 in this multicenter trial run in 8 different countries.
Patients were included in the HR group in view of the presence of at least one of the following criteria: induction
failure; high levels of minimal residual disease (MRD) at day 15 of induction, or at the end of induction (EOI), or at the
end of consolidation (EOC); presence of KMT2A::AFF1, of IKZF1+ and positive MRD at EOI (Stanulla et al, JCO 2018),
TCF3::HLF, or hypodiploidy. B-ALL pts with one or several of these characteristics represented 20.8% of all pts aged
0-18 years of age with B-ALL. After a 4-drug induction phase, and two weeks of consolidation treatment, patients
were randomized to receive Bortezomib in addition to standard consolidation (not part of this report). Before treatment
continued with intensive consolidation block HR-1’, MRD was analyzed in order to identify patients eligible for subsequent
hematopoietic stem cell transplantation (HSCT) based on MRD results. After block HR-1’, all B-ALL HR pts were
randomized to receive either two courses of consolidation (blocks HR-2’, and HR-3’), or two 28-day courses of Blina at
15μg/m 2/d administered by continuous IV infusion (with a 2-week treatment-free interval). Two intrathecal injections
of methotrexate (MTX) for CNS prophylaxis were given on days 1 and 29 of each Blina course, respectively. Out of 728
HR B-ALL pts, 619 pts were eligible for randomization [reasons for non-eligibility were: Event (death or relapse) before
randomization was due (26), Down syndrome (25; scheduled for a non-randomized intervention with Blina), presence
of TCF3::HLF (3; could receive any alternative therapy including Blina), discontinuation/substantial change of preceding
therapy (23) or other protocol exclusion criteria (32)]. 572 pts were randomized (92.4% of those eligible). One pt assigned
to the experimental arm (EA) and 4 pts assigned to the control arm (CA) received the other arms, respectively.
Results: Toxicity was evaluated in randomized pts according to treatment administered during the randomized phase,
respectively, until next element started: 268 pts were treated in the control and 281 in the EA (see Table). 16 of them
switched in/after the first Blina cycle to the HR blocks due to toxicity or poor response to Blina (due to increasing MRD,
>=1x10 -4). Medically relevant adverse reactions of special interest (ARSI) according to MedDRA (specified in the
protocol) were evaluated in the randomized treatment phases (CA: HR-2‘/HR-3‘ block, EA: 2 Blina cycles). ARSI were
recorded in 61 of 268 pts in the CA (22.8%, 71 ARSI) and in 29 of 281 pts in the EA (10.3% [p<0.001], 33 ARSI); 3
of the 33 ARSI in the EA were related to HR blocks and were observed in 3 of the 16 pts that switched to HR blocks.
Life-threatening SAR were seen in 14 pts of the control group (5.2%) and in no patient in the EA (p<0.001). Conclusions:
Taken together, these results show for the first time in newly diagnosed pts with HR B ALL, the favorable toxicity
profile previously reported with Blinatumomab in pediatric relapsed ALL (Locatelli F et al, JAMA 2021; Brown P et al,
JAMA 2021). We have demonstrated that the toxicity profile of Blinatumomab is much more favorable as compared to
the intensive chemotherapy approach using HR-blocks. If upcoming analyses of outcome data will show no inferiority
of the EA, blinatumomab replacement of some of the intensive chemotherapy blocks will become the new standard of
care for treatment if newly diagnosed patients with HR B-ALL.`
    },
    {
      id: 5,
      title: `. Zhang B, Hao L. Pediatric patients with acute lymphoblastic leukemia treated with
blinatumomab in a real-world study. Blood. 2023;142:5817.`,
      resume: `Introduction: Pediatric B-cell acute lymphoblastic leukemia (B-ALL) involves chromosomal abnormalities and
genetic alterations at an early stage of differentiation of lymphoid precursor cells. Most children (~around 80%) with
B-ALL can achieve long-term survival with conventional chemotherapy but a sizable number of patients relapse or do
not attain complete remission. Blinatumomab is a bispecific T-cell engager antibody designed to redirect CD3+ T cells
to bind to CD19+ target cells. Although blinatumomab has been approved for the treatment of relapsed or refractory
B-ALL, it has shown efficacy in newly diagnosed B-ALL also. Here, we studied the effect of blinatumomab in newly diagnosed
B-ALL (including infantile B-ALL) and post-induction therapy measurable residual disease (MRD) positive B-ALL
in a real-world study. Methods: Pediatric patients with B-ALL including newly diagnosed infants (infantile type) or with
MRD positivity during the induction remission phase, were enrolled. The patients received a 7-day pre-treatment VCP
regimen consisting of intravenous infusions of cyclophosphamide 800 mg/m 2 on day 1, vindesine 3 mg/m 2 on day 1,
prednisone 1-2 mg/kg on days 1 to 7 (VCP regimen), followed by 28 days of treatment with blinatumomab at 5μg/m 2/
day on the first 1 to 7 days and 15 μg/m 2/day on the next 8 to 28 days. Four patients with economic burden received
blinatumomab for 14 days: 5μg/m 2/day for days 1 to 4 and 15 μg/m 2/day from day 5 to 14, after pre-treatment with
the VCP regimen. Bone marrow assessment of MRD was done on days 14 and 28. Results: Between July 2022 and
July 2023, 24 pediatric patients received VCP-blinatumomab. Among them, 11 (45.8%) patients had high-risk disease,
and 5 (20.8%) had standard risk. The median age of the cohort was 8.5 years. Among the cohort, there was 1 patient
with infantile B-ALL and 1 patient with Philadelphia chromosome-positive (Ph+)-ALL; besides 3 patients were TELAML
positive, 3 patients were CRLF2 positive, 1 patient was E2A-PBX1 positive, 1 patient was SSBP2-CSF1R positive,
and 1 patient was EVI1 positive. Blinatumomab was administered to 5 patients in the induction remission period, and
for 2 patients, blinatumomab was administered in consolidation after inotuzumab ozogamicin (INO). While 18 patients
were treated with blinatumomab for 28 days, 6 patients were treated with blinatumomab for 14 days. Four patients
opted for a 14-day regimen due to financial reasons and 2 patients were transplanted with hematopoietic stem cell
transplantation after 14 days of treatment with blinatumomab. All the treated patients achieved MRD negativity (100%).
There were no ≥ grade 3 treatment-related toxicity and no deaths reported. Conclusion: Our study results showed that
a 100% MRD negativity rate was achieved in children with B-ALL after treatment with the blinatumomab consolidation
following the chemotherapy and no significant safety concerns were observed. Blinatumomab consolidation therapy
was also effective in patients pretreated with INO. Blinatumomab consolidation after induction therapy could be a new
and effective strategy for the treatment of patients with newly diagnosed B-ALL.`
    },
    {
      id: 6,
      title: `. van der Sluis, Inge M., de Lorenzo P, Kotecha RS, et al. Blinatumomab added to chemotherapy
in infant lymphoblastic leukemia. N Engl J Med. 2023;388(17):1572-1581.`,
      resume: `BACKGROUND KMT2A-rearranged acute lymphoblastic leukemia (ALL) in infants is an aggressive disease
with 3-year event-free survival below 40%. Most relapses occur during treatment, with two thirds occurring within 1
year and 90% within 2 years after diagnosis. Outcomes have not improved in recent decades despite intensification
of chemotherapy. METHODS We studied the safety and efficacy of blinatumomab, a bispecific T-cell engager molecule
targeting CD19, in infants with KMT2A-rearranged ALL. Thirty patients younger than 1 year of age with newly
diagnosed KMT2A-rearranged ALL were given the chemotherapy used in the Interfant-06 trial with the addition of one
postinduction course of blinatumomab (15 mu g per square meter of body-surface area per day; 28-day continuous
infusion). The primary end point was clinically relevant toxic effects, defined as any toxic effect that was possibly or
definitely attributable to blinatumomab and resulted in permanent discontinuation of blinatumomab or death. Minimal
residual disease (MRD) was measured by polymerase chain reaction. Data on adverse events were collected. Outcome
data were compared with historical control data from the Interfant-06 trial. RESULTS The median follow-up was 26.3
months (range, 3.9 to 48.2). All 30 patients received the full course of blinatumomab. No toxic effects meeting the
definition of the primary end point occurred. Ten serious adverse events were reported (fever [4 events], infection [4],
hypertension [1], and vomiting [1]). The toxic-effects profile was consistent with that reported in older patients. A total
of 28 patients (93%) either were MRD-negative (16 patients) or had low levels of MRD (<5x10(-4) [i.e., <5 leukemic
cells per 10,000 normal cells], 12 patients) after the blinatumomab infusion. All the patients who continued chemotherapy
became MRD-negative during further treatment. Two-year disease-free survival was 81.6% in our study (95%
confidence interval [CI], 60.8 to 92.0), as compared with 49.4% (95% CI, 42.5 to 56.0) in the Interfant-06 trial; the
corresponding values for overall survival were 93.3% (95% CI, 75.9 to 98.3) and 65.8% (95% CI, 58.9 to 71.8).CONCLUSIONS
Blinatumomab added to Interfant-06 chemotherapy appeared to be safe and had a high level of efficacy in
infants with newly diagnosed KMT2A-rearranged ALL as compared with historical controls from the Interfant-06 trial.`
    },
    {
      id: 7,
      title: `. Hodder A, Mishra AK, Baird S, et al. Blinatumomab as toxicity sparing first line treatment
of children and young persons with B-precursor acute lymphoblastic leukaemia
(B-ALL). Blood. 2022;140:8987-8988.`,
      resume: `Introduction Recent studies have demonstrated that Blinatumomab is more effective and less toxic than intensive
chemotherapy in children and young persons (CYP) with relapsed B-ALL. Although Blinatumomab is standard
of care in adults with persistent MRD during first line therapy based on the BLAST study, there is no published evidence
in CYP of its efficacy and toxicity in this setting. We report our experience of Blinatumomab as a toxicity sparing
alternative to chemotherapy in first line treatment of CYP with B-ALL. Patients and Methods We audited the outcome
of patients treated according to a consensus UK guideline for first line treatment with Blinatumomab of CYP patients
with B-ALL who were considered unfit for post-remission intensive chemotherapy or CR1 HSCT because of toxicity
to previous chemotherapy or significant co-morbidities. Treating clinicians obtained consent for treatment with Blinatumomab
as standard of care after counselling patients and carers about the risk and benefits of this approach. The
guideline mandated discussion of all such patients at national tumour board meetings and data was captured through
a referral proforma and follow-up questionnaire. It recommended replacing consolidation and/or interim maintenance
phases with 2 cycles of blinatumomab as a single agent with a 1-2 week break between cycles. Patients who obtained
an MRD response (defined as MRD <0.01%) received delayed intensification (DI) followed by maintenance, or maintenance
therapy alone if they were unfit for DI. Patients who had persistent MRD >0.01% were categorised as Blinatumomab
failures and received either further chemotherapy, HSCT or CART depending on performance status. Events
were defined as death, relapse, or secondary cancer. Results Sixty patients were eligible for analysis, including 4 cases
of Ph+ ALL and 8 with Down syndrome. Compared to the B-ALL cohort in a previous trial, UKALL 2003, there was a
higher proportion of NCI high risk, cytogenetic high risk, end of induction MRD positive and Down Syndrome patients
(Table 1). All patients were in morphological complete remission prior to receiving Blinatumomab. Blinatumomab was
administered for toxicity (47/60 (78%), including G3/4 pancreatitis, typhlitis, severe infections often requiring intensive
care or surgery, disseminated fungal infections, CNS haemorrhage or liver failure) or co-morbidities (Down syndrome,
Li-Fraumeni syndrome (n=2), Schimke immune-osseous dysplasia and 7q11.21-23 duplication) or in one case to
minimise transfusion requirements (Jehovah’s witness.) In the remaining 13 cases, blinatumomab was either administered
for end of consolidation MRD of ≥0.05% (n=10) in patients unfit for intensive chemotherapy/HSCT, or positive
end of induction MRD in patients with HR cytogenetics (n=3). Blinatumomab replaced consolidation and interim maintenance
therapy in 32/60 (53%) cases, and interim maintenance in the remaining 28/60 (47%) cases. Blinatumomab
was well tolerated with 1 G3 neurotoxicity (seizure in a Down syndrome patient who had not received prophylactic
anti-convulsants) and no grade 2-4 CRS. Of the 50/60 patients with positive MRD pre-Blinatumomab (median = 0.1%,
range = 0.01%-8%), 48 (96%) had a reduction in level to <0.01% (45 after cycle 1, 3 after cycle 2), and 10 patients
maintained MRD negativity before and after 2 cycles of Blinatumomab. In the two patients who did not respond (3%),
1 received CART followed by transplant for persistent MRD, the other is receiving intensive chemotherapy. Of the responders,
47 (80%) received DI and maintenance and 10 maintenance alone. With a median follow up of 16 months
(range 2-44 months), 2 patients have relapsed (1 at 2 years, the other at 9 months) but remain alive. The 4 patients
with Ph+ ALL and the 8 with Down syndrome are alive and in remission, with a median follow up of 12.5 months (range
7-22 months). Conclusion In this large case series, we found Blinatumomab is safe and highly active with promising
short-term efficacy in a higher risk cohort of CYP patients with B-ALL in first remission. Our results support its use in
place of intensive chemotherapy for patients with relative chemo-intolerance. Furthermore, if the efficacy is sustained
on longer follow-up, the results argue for replacing parts of post-remission intensive chemotherapy with Blinatumomab
to reduce attendant morbidity and mortality. SS and AV are joint senior authors, AH and AM joint first authors [Formula
presented] Disclosures: Moorman: Amgen: Honoraria.`
    },
    {
      id: 8,
      title: `. Queudeville M, Ebinger M. Blinatumomab in pediatric acute lymphoblastic leukemia-
from salvage to first line therapy (A systematic review). Journal of clinical medicine.
2021;10(12).`,
      resume: `Acute lymphoblastic leukemia is by far the most common malignancy in children, and new immunotherapeutic
approaches will clearly change the way we treat our patients in future years. Blinatumomab is a bispecific T-cell-engaging
antibody indicated for the treatment of relapsed/refractory acute lymphoblastic leukemia (R/R-ALL). The use
of blinatumomab in R/R ALL has shown promising effects, especially as a bridging tool to hematopoietic stem cell
transplantation. For heavily pretreated patients, the response to one or two cycles of blinatumomab ranges from 34%
to 66%. Two randomized controlled trials have very recently demonstrated an improved reduction in minimal residual
disease as well as an increased survival for patients treated with blinatumomab compared to standard consolidation
treatment in first relapse. Current trials using blinatumomab frontline for high-risk patients or as a consolidation treatment
post-transplant will show whether efficacy is even higher in less heavily pretreated patients. Due to the distinct
pattern of adverse events compared to high-dose conventional chemotherapy, blinatumomab could play an important
role for patients with a risk for severe chemotherapy-associated toxicities. This systematic review discusses all published
results for blinatumomab in children as well as all ongoing clinical trials.
Material científico e não promocional, destinado à atualização científica, com base em dados científicos e equilibrados
disponíveis na literatura. Esse material não apresenta nenhuma intenção comercial.`
    },
    // {
    //   id: 9,
    //   title: ``,
    //   resume: ``
    // },
    // {
    //   id: 10,
    //   title: ``,
    //   resume: ``
    // },
    // {
    //   id: 11,
    //   title: ``,
    //   resume: ``
    // },
    // {
    //   id: 4,
    //   title: ``,
    //   resume: ``
    // },
    // {
    //   id: 4,
    //   title: ``,
    //   resume: ``
    // },
    // {
    //   id: 4,
    //   title: ``,
    //   resume: ``
    // },
    // {
    //   id: 4,
    //   title: ``,
    //   resume: ``
    // },
    // {
    //   id: 4,
    //   title: ``,
    //   resume: ``
    // },
    // {
    //   id: 4,
    //   title: ``,
    //   resume: ``
    // },
    // {
    //   id: 4,
    //   title: ``,
    //   resume: ``
    // },
    // {
    //   id: 4,
    //   title: ``,
    //   resume: ``
    // },
    // {
    //   id: 4,
    //   title: ``,
    //   resume: ``
    // },
  ];

  // Array de referências para os textos
  const textRefs = useRef(array1to60);

  // Função que rola até o texto específico
  useEffect(() => {
    if (savedNumber >= 1 && savedNumber <= 8) {
      // Certifica que o número do texto é válido e rola até ele
      textRefs.current[savedNumber - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

  }, [savedNumber]);

  return (
    <div className="text-container">
      <header>
        <h1>Blina Frontline Pediátrico</h1>
      </header>

      {array1to60.map((item, index) => {
        return (
          <section
            key={index}
            ref={el => textRefs.current[index] = el}
          >
            <h2>{item.id}{item.title}</h2>
            <p className="summary">
              <strong>Abstract:</strong>{item.resume}
            </p>
          </section>
        )
      })}


      <footer className="footer">
        <p>
          Material destinado aos profissionais da saúde. Este material pode conter informações sobre terapias ou medicamentos ainda não
          aprovados no Brasil. A Amgen recomenda o uso de seus medicamentos de acordo com a aprovação regulatória local.
        </p>
        <p>SC-BRA-AMG103-00637. Aprovado em outubro de 2024.</p>
      </footer>
    </div>
  );
}