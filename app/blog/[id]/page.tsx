import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Menopause: Symptoms & Management',
    excerpt: 'Learn about menopause symptoms and effective management strategies for a smoother transition.',
    date: '2024-01-15',
    category: 'Women\'s Health',
    content: `
      <p>Menopause is a natural biological milestone in a woman's life that signifies the end of menstrual cycles and reproductive ability. Although it is a normal process, the hormonal changes associated with menopause can cause a wide range of physical, emotional, and metabolic symptoms. Early understanding and medical guidance can help women manage menopause comfortably and maintain long-term health.</p>

      <h2>What Is Menopause?</h2>
      <p>Menopause is clinically diagnosed when a woman has not had a menstrual period for 12 consecutive months, without any other medical cause. It typically occurs between the ages of 45 and 55, though some women may experience it earlier or later.</p>
      <p>Menopause occurs due to a gradual decline in ovarian function, leading to reduced production of estrogen and progesterone—hormones essential for menstrual regulation and overall health.</p>

      <h2 id="stages">Stages of Menopause</h2>
      
      <h3>Perimenopause</h3>
      <p>The transitional phase before menopause, characterized by fluctuating hormone levels. Women may experience irregular periods, hot flashes, mood changes, and sleep disturbances.</p>

      <h3>Menopause</h3>
      <p>Defined by the permanent cessation of menstruation. Fertility ends, and hormone levels stabilize at a lower baseline.</p>

      <h3>Postmenopause</h3>
      <p>The phase following menopause, during which symptoms may reduce but long-term health risks related to estrogen deficiency become more prominent.</p>

      <h2 id="symptoms">Common Menopause Symptoms</h2>
      <p>Menopause symptoms vary in severity and duration among women.</p>

      <h3>Physical Symptoms</h3>
      <ul>
        <li>Hot flashes and night sweats</li>
        <li>Irregular or absent menstrual periods</li>
        <li>Vaginal dryness and discomfort</li>
        <li>Weight gain and slowed metabolism</li>
        <li>Joint and muscle pain</li>
        <li>Reduced libido</li>
      </ul>

      <h3>Emotional and Cognitive Symptoms</h3>
      <ul>
        <li>Mood swings and irritability</li>
        <li>Anxiety or depressive symptoms</li>
        <li>Sleep disturbances</li>
        <li>Difficulty concentrating or memory issues</li>
      </ul>

      <h2 id="health-risks">Health Risks After Menopause</h2>
      <p>Low estrogen levels after menopause may increase the risk of:</p>
      <ul>
        <li>Osteoporosis and bone fractures</li>
        <li>Urinary and vaginal health issues</li>
        <li>Metabolic disorders such as diabetes</li>
      </ul>
      
      <h3>Heart disease</h3>
      <p>Regular health screening and preventive care are essential during this phase.</p>

      <h2 id="management">Effective Menopause Management Option</h2>
      <p>Menopause management should be individualized based on symptoms, age, medical history, and personal preferences.</p>

      <h3>Lifestyle Management</h3>
      <ul>
        <li>Balanced diet rich in calcium, vitamin D, protein, and fiber</li>
        <li>Regular physical activity, including weight-bearing exercises</li>
        <li>Adequate sleep and stress management</li>
        <li>Avoidance of smoking and excessive alcohol</li>
      </ul>

      <h3>Medical Treatment Options</h3>
      <p>Depending on clinical evaluation, treatment may include:</p>
      <ul>
        <li>Hormone therapy (when medically indicated)</li>
        <li>Non-hormonal medications for hot flashes and mood symptoms</li>
        <li>Vaginal treatments for dryness and discomfort</li>
        <li>Bone density evaluation and osteoporosis prevention</li>
      </ul>
      <p>All treatments should be prescribed and monitored by a qualified gynecologist.</p>

      <h2>When to See a Gynecologist for Menopause</h2>
      <h3>Consult a doctor if:</h3>
      <ul>
        <li>Menopause symptoms affect daily life or work</li>
        <li>There is heavy or unexpected vaginal bleeding</li>
        <li>Emotional symptoms persist or worsen</li>
        <li>You need personalized menopause treatment planning</li>
      </ul>
      <p>Early consultation ensures better symptom control and long-term health protection.</p>

      <h2>Life After Menopause</h2>
      <p>Menopause is not the end of health or vitality. With proper medical care, lifestyle adjustments, and regular follow-ups, women can enjoy an active, healthy, and fulfilling life after menopause.</p>

      <h2>Expert Menopause Care at Our Clinic</h2>
      <p>At our clinic, we offer comprehensive menopause evaluation and personalized treatment plans, focusing on symptom relief, bone health, heart health, and overall well-being. Our goal is to support women through every stage of menopause with evidence-based care.</p>

      <h2>Conclusion</h2>
      <p>Understanding menopause empowers women to take control of their health. With expert gynecological care and timely intervention, menopause can be managed effectively and comfortably.</p>
    `,
  },
  {
    id: 2,
    title: 'Benefits of Laser Hair Reduction',
    excerpt: 'Discover the advantages of laser hair reduction and what to expect during treatment.',
    date: '2024-01-10',
    category: 'Cosmetic Treatments',
    content: `
      <p>Unwanted hair growth is a common concern for both women and men. Traditional hair removal methods such as shaving, waxing, and threading provide only temporary results and often lead to skin irritation, ingrown hairs, or frequent maintenance. Laser Hair Reduction (LHR) offers a safe, effective, and long-term solution for reducing unwanted hair with minimal discomfort and downtime.</p>

      <h2 id="what-is-laser-hair-reduction">What Is Laser Hair Reduction?</h2>
      <p>Laser Hair Reduction is a non-invasive cosmetic procedure that uses concentrated light energy to target hair follicles. The laser selectively damages the hair follicle, reducing future hair growth while leaving the surrounding skin unharmed.</p>
      <p>Over multiple sessions, laser treatment significantly reduces hair thickness, density, and regrowth.</p>

      <h2 id="key-benefits">Key Benefits of Laser Hair Reduction</h2>

      <h3>1. Long-Term Hair Reduction</h3>
      <p>Unlike shaving or waxing, laser hair reduction provides long-lasting results. After a full course of sessions, most patients experience a significant and permanent reduction in hair growth.</p>

      <h3>2. Precise and Targeted Treatment</h3>
      <p>Laser technology targets dark, coarse hair follicles without damaging the surrounding skin. This makes it ideal for treating specific areas with precision.</p>

      <h3>3. Smooth and Clear Skin</h3>
      <p>Laser hair reduction helps eliminate common problems such as:</p>
      <ul>
        <li>Ingrown hairs</li>
        <li>Razor bumps</li>
        <li>Skin irritation</li>
        <li>Uneven skin texture</li>
      </ul>
      <p>The result is smoother, clearer skin over time.</p>

      <h3>4. Safe and Clinically Proven</h3>
      <p>When performed by trained professionals using FDA-approved devices, laser hair reduction is a safe and well-established procedure suitable for various skin types.</p>

      <h3>5. Minimal Pain and Discomfort</h3>
      <p>Modern laser systems are equipped with cooling technology that minimizes discomfort during the procedure. Most patients describe the sensation as a mild tingling or warmth.</p>

      <h3>6. Suitable for Multiple Body Areas</h3>
      <p>Laser hair reduction can be safely performed on almost all areas of the body, including:</p>
      <ul>
        <li>Face (upper lip, chin, sideburns)</li>
        <li>Underarms</li>
        <li>Arms and legs</li>
        <li>Bikini line</li>
        <li>Chest and back</li>
      </ul>

      <h3>7. Time-Saving and Cost-Effective</h3>
      <p>Although laser hair reduction requires multiple sessions, it saves time and money in the long run by reducing the need for frequent shaving, waxing, or salon visits.</p>

      <h3>8. Improves Skin Pigmentation and Texture</h3>
      <p>Laser hair reduction often improves skin tone by reducing pigmentation caused by repeated waxing or shaving, especially in sensitive areas like underarms and bikini lines.</p>

      <h2 id="sessions-required">How Many Sessions Are Required?</h2>
      <p>Hair grows in cycles, and laser treatment is effective only during the active growth phase. Typically:</p>
      <ul>
        <li>6 to 8 sessions are required</li>
        <li>Sessions are spaced 4–6 weeks apart</li>
        <li>Maintenance sessions may be advised annually</li>
      </ul>
      <p>The exact number depends on hair type, skin tone, and treatment area.</p>

      <h2 id="ideal-candidate">Who Is an Ideal Candidate?</h2>
      <p>Laser hair reduction is suitable for:</p>
      <ul>
        <li>Men and women with unwanted hair</li>
        <li>Patients prone to ingrown hairs or skin irritation</li>
        <li>Individuals looking for long-term hair reduction</li>
      </ul>
      <p>A consultation is essential to assess skin type, hair texture, and medical history.</p>

      <h2 id="safety">Is Laser Hair Reduction Safe for All Skin Types?</h2>
      <p>With advancements in technology, laser hair reduction is now safe for most skin tones when performed using the correct laser settings by experienced professionals.</p>

      <h2 id="post-treatment-care">Post-Treatment Care</h2>
      <p>After laser hair reduction:</p>
      <ul>
        <li>Avoid sun exposure for a few days</li>
        <li>Use sunscreen regularly</li>
        <li>Avoid waxing or threading between sessions</li>
        <li>Shaving is allowed if needed</li>
      </ul>
      <p>Mild redness may occur and usually resolves within a few hours.</p>

      <h2 id="consult-doctor">When Should You Consult a Doctor?</h2>
      <p>Consult a qualified doctor if you:</p>
      <ul>
        <li>Have sensitive skin or hormonal hair growth</li>
        <li>Are pregnant or have underlying skin conditions</li>
        <li>Want a personalized treatment plan</li>
      </ul>
      <p>Medical supervision ensures safe and effective results.</p>

      <h2 id="conclusion">Conclusion</h2>
      <p>Laser hair reduction is a safe, effective, and convenient solution for unwanted hair. With long-lasting results, improved skin quality, and minimal discomfort, it has become the preferred choice for modern hair removal. Choosing a qualified clinic and experienced doctor is key to achieving optimal outcomes.</p>
    `,
  },
  {
    id: 3,
    title: 'HIFU Treatment for Urinary Incontinence',
    excerpt: 'Non-invasive HIFU treatment offers effective solution for urinary incontinence without surgery.',
    date: '2024-01-05',
    category: 'Treatments',
    content: `
      <p>Urinary incontinence is a common yet often under-discussed condition that affects many women, especially after childbirth, menopause, or pelvic floor weakening. The involuntary leakage of urine can impact daily activities, confidence, and overall quality of life. HIFU (High-Intensity Focused Ultrasound) treatment offers a non-surgical, effective option for managing urinary incontinence by strengthening pelvic tissues and improving bladder support.</p>

      <h2 id="what-is-incontinence">What Is Urinary Incontinence?</h2>
      <p>Urinary incontinence is the loss of bladder control, leading to involuntary urine leakage. It can range from occasional mild leaks to more frequent and disruptive episodes.</p>

      <h2 id="types">Common Types of Urinary Incontinence</h2>
      <ul>
        <li><strong>Stress urinary incontinence</strong> – leakage during coughing, sneezing, laughing, or exercise</li>
        <li><strong>Urge incontinence</strong> – sudden, intense urge to urinate followed by leakage</li>
        <li><strong>Mixed incontinence</strong> – combination of stress and urge incontinence</li>
      </ul>
      <p>Stress urinary incontinence is the most common type treated with HIFU therapy.</p>

      <h2 id="what-is-hifu">What Is HIFU Treatment?</h2>
      <p>HIFU (High-Intensity Focused Ultrasound) is a non-invasive, non-surgical medical technology that delivers focused ultrasound energy deep into targeted tissues without affecting the skin surface.</p>
      <p>In gynecological applications, HIFU stimulates collagen production and tissue tightening in the pelvic floor and vaginal support structures, helping restore bladder control.</p>

      <h2 id="how-hifu-helps">How Does HIFU Help in Urinary Incontinence?</h2>
      <p>HIFU works by:</p>
      <ul>
        <li>Strengthening pelvic floor muscles and connective tissue</li>
        <li>Improving vaginal wall support to the bladder and urethra</li>
        <li>Enhancing collagen remodeling and tissue elasticity</li>
        <li>Reducing urine leakage during physical activity</li>
      </ul>
      <p>This results in improved bladder control and reduced symptoms over time.</p>

      <h2 id="benefits">Benefits of HIFU Treatment for Urinary Incontinence</h2>

      <h3>1. Non-Surgical and Non-Invasive</h3>
      <p>HIFU requires no cuts, stitches, or anesthesia, making it a safe alternative to surgical procedures.</p>

      <h3>2. No Downtime</h3>
      <p>Patients can return to daily activities immediately after the procedure.</p>

      <h3>3. Painless and Comfortable</h3>
      <p>Most patients experience minimal discomfort during treatment.</p>

      <h3>4. Improves Quality of Life</h3>
      <p>By reducing leakage episodes, HIFU helps restore confidence and comfort in daily activities.</p>

      <h3>5. Long-Lasting Results</h3>
      <p>Results gradually improve over weeks as collagen regeneration occurs, with benefits lasting several months to a year.</p>

      <h3>6. Safe for Post-Childbirth and Menopausal Women</h3>
      <p>HIFU is especially beneficial for women with pelvic floor weakness due to childbirth or hormonal changes.</p>

      <h2 id="ideal-candidate-hifu">Who Is an Ideal Candidate for HIFU?</h2>
      <p>HIFU treatment is suitable for women who:</p>
      <ul>
        <li>Have mild to moderate stress urinary incontinence</li>
        <li>Experience urine leakage during coughing or exercise</li>
        <li>Prefer non-surgical treatment options</li>
        <li>Are not planning immediate surgery</li>
      </ul>
      <p>A medical evaluation is required to confirm suitability.</p>

      <h2 id="procedure">What to Expect During the Procedure</h2>
      <ul>
        <li>The treatment typically takes 30–45 minutes</li>
        <li>No anesthesia is required</li>
        <li>Mild warmth or tingling sensation may be felt</li>
        <li>Patients can resume normal activities the same day</li>
      </ul>

      <h2 id="sessions-needed">How Many Sessions Are Needed?</h2>
      <p>Most patients benefit from:</p>
      <ul>
        <li>One session, with results improving over 2–3 months</li>
        <li>Annual maintenance sessions may be recommended for sustained results</li>
      </ul>
      <p>The exact plan depends on individual symptoms and tissue response.</p>

      <h2 id="post-treatment-care-hifu">Post-Treatment Care</h2>
      <p>After HIFU treatment:</p>
      <ul>
        <li>Avoid heavy lifting for a few days</li>
        <li>Maintain pelvic floor exercises as advised</li>
        <li>Stay hydrated</li>
        <li>Follow doctor-recommended follow-up visits</li>
      </ul>

      <h2 id="safety-hifu">Is HIFU Treatment Safe?</h2>
      <p>When performed by trained medical professionals using approved devices, HIFU is considered safe with minimal side effects. Temporary mild discomfort or warmth may occur and usually resolves quickly.</p>

      <h2 id="consult-doctor-hifu">When Should You Consult a Doctor?</h2>
      <p>You should consult a gynecologist if:</p>
      <ul>
        <li>Urinary leakage affects your daily life</li>
        <li>Symptoms worsen over time</li>
        <li>You want non-surgical treatment options</li>
        <li>You need personalized assessment and care</li>
      </ul>
      <p>Early consultation leads to better symptom control and outcomes.</p>

      <h2 id="conclusion-hifu">Conclusion</h2>
      <p>HIFU treatment offers a safe, non-surgical, and effective option for managing urinary incontinence. By strengthening pelvic tissues and improving bladder support, it helps women regain control, confidence, and comfort without downtime or surgery. Consulting an experienced gynecologist ensures optimal and lasting results.</p>
    `,
  },
  {
    id: 4,
    title: 'Importance of Regular Gynecological Check-ups',
    excerpt: 'Regular check-ups are essential for maintaining women\'s health and early detection of issues.',
    date: '2023-12-28',
    category: 'Women\'s Health',
    content: `
      <p>Women's health needs change at every stage of life—from adolescence to pregnancy, menopause, and beyond. Regular gynecological check-ups play a crucial role in maintaining overall health, preventing disease, and detecting potential problems early. Routine visits to a gynecologist are not only for pregnancy-related concerns but are essential for long-term well-being.</p>

      <h2 id="what-is-checkup">What Is a Gynecological Check-up?</h2>
      <p>A gynecological check-up is a routine medical examination focused on a woman's reproductive and sexual health. Depending on age, medical history, and symptoms, it may include:</p>
      <ul>
        <li>Medical history review</li>
        <li>Physical and pelvic examination</li>
        <li>Breast examination</li>
        <li>Cervical cancer screening (Pap smear)</li>
        <li>Screening for infections or hormonal issues</li>
      </ul>
      <p>These check-ups are designed to identify health concerns early, even before symptoms appear.</p>

      <h2 id="why-important">Why Regular Gynecological Check-ups Are Important</h2>

      <h3>1. Early Detection of Health Conditions</h3>
      <p>Many gynecological conditions, such as cervical cancer, ovarian cysts, fibroids, and infections, may not show symptoms in the early stages. Regular check-ups allow early diagnosis, leading to more effective treatment and better outcomes.</p>

      <h3>2. Cervical Cancer Screening</h3>
      <p>Routine Pap smears and HPV screening help detect precancerous changes in the cervix early, significantly reducing the risk of cervical cancer when identified on time.</p>

      <h3>3. Monitoring Menstrual and Hormonal Health</h3>
      <p>Irregular periods, heavy bleeding, painful cycles, or hormonal imbalances can indicate underlying conditions such as PCOS or thyroid disorders. Regular visits help in timely evaluation and management.</p>

      <h3>4. Reproductive and Fertility Health</h3>
      <p>Gynecological check-ups provide guidance on family planning, contraception, fertility concerns, and pre-pregnancy counseling, ensuring informed reproductive choices.</p>

      <h3>5. Sexual and Vaginal Health</h3>
      <p>Issues such as vaginal infections, abnormal discharge, pain during intercourse, or urinary symptoms can be effectively diagnosed and treated during routine visits.</p>

      <h3>6. Breast Health Awareness</h3>
      <p>Breast examinations during gynecological visits help in early detection of lumps or abnormalities. Women also receive guidance on self-breast examination and appropriate screening based on age.</p>

      <h3>7. Menopause and Aging-Related Care</h3>
      <p>As women approach menopause, regular check-ups help manage symptoms such as hot flashes, urinary issues, and bone health concerns, improving quality of life during this transition.</p>

      <h2 id="how-often">How Often Should You Visit a Gynecologist?</h2>
      <ul>
        <li><strong>Teenagers & young adults:</strong> At least once every 1–2 years or when symptoms arise</li>
        <li><strong>Women aged 21–40:</strong> Annually or as advised for screening tests</li>
        <li><strong>Pregnant women:</strong> As per antenatal care schedule</li>
        <li><strong>Perimenopausal & menopausal women:</strong> Yearly check-ups for hormonal and bone health</li>
      </ul>
      <p>Your doctor may recommend more frequent visits based on medical history.</p>

      <h2 id="when-to-see">When Should You See a Gynecologist Immediately?</h2>
      <p>Seek medical attention if you experience:</p>
      <ul>
        <li>Abnormal or heavy vaginal bleeding</li>
        <li>Persistent pelvic pain</li>
        <li>Missed or irregular periods</li>
        <li>Unusual vaginal discharge or odor</li>
        <li>Pain during intercourse</li>
        <li>Urinary leakage or burning</li>
      </ul>
      <p>Prompt consultation prevents complications and ensures early treatment.</p>

      <h2 id="overcoming-hesitation">Overcoming Hesitation About Gynecological Visits</h2>
      <p>Many women delay visits due to embarrassment or fear. It is important to remember that gynecologists are trained professionals committed to providing confidential, respectful, and compassionate care. Open communication helps ensure accurate diagnosis and effective treatment.</p>

      <h2 id="conclusion-checkup">Conclusion</h2>
      <p>Regular gynecological check-ups are a vital part of preventive healthcare for women. They help detect health issues early, support reproductive and hormonal health, and promote long-term well-being. Making routine gynecological visits a priority empowers women to take control of their health at every stage of life.</p>
    `,
  },
  {
    id: 5,
    title: 'Common Cosmetic Gynecology Treatments',
    excerpt: 'Learn about cosmetic gynecology procedures and how they can improve quality of life.',
    date: '2023-12-20',
    category: 'Cosmetic Treatments',
    content: `
      <h2 id="common-treatments">Common Cosmetic Gynecology Treatments</h2>

      <h3 id="vaginal-tightening">Vaginal Tightening</h3>
      <p>Non-surgical treatments such as radiofrequency or ultrasound-based therapies help improve vaginal tone and elasticity by stimulating collagen production.</p>

      <h3 id="vaginal-dryness">Treatment for Vaginal Dryness</h3>
      <p>Advanced therapies restore hydration and tissue health, especially beneficial for menopausal women or those with hormonal changes.</p>

      <h3 id="urinary-incontinence-cosmetic">Urinary Incontinence Management</h3>
      <p>Non-invasive procedures strengthen pelvic floor support and help reduce stress urinary incontinence without surgery.</p>

      <h3 id="labial-aesthetic">Labial Aesthetic Treatments</h3>
      <p>Procedures aimed at improving comfort and appearance of the labia when medically appropriate, always prioritizing safety and patient consent.</p>

      <h3 id="post-childbirth">Post-Childbirth Vaginal Rejuvenation</h3>
      <p>Treatments designed to restore vaginal tissue strength and comfort after delivery.</p>

      <h2 id="benefits-cosmetic">Benefits of Cosmetic Gynecology</h2>
      <ul>
        <li>Improves intimate comfort and hygiene</li>
        <li>Enhances confidence and self-esteem</li>
        <li>Addresses functional concerns without surgery</li>
        <li>Minimal downtime and quick recovery</li>
        <li>Safe and effective when performed by trained specialists</li>
      </ul>

      <h2 id="ideal-candidate-cosmetic">Who Is an Ideal Candidate?</h2>
      <p>Cosmetic gynecology may be suitable for women who:</p>
      <ul>
        <li>Experience vaginal laxity, dryness, or discomfort</li>
        <li>Have mild to moderate urinary leakage</li>
        <li>Are post-childbirth or post-menopausal</li>
        <li>Desire non-surgical treatment options</li>
        <li>Seek improvement in intimate wellness</li>
      </ul>
      <p>A detailed consultation ensures appropriate treatment selection.</p>

      <h2 id="safety-considerations">Safety and Medical Considerations</h2>
      <p>All cosmetic gynecology procedures should be:</p>
      <ul>
        <li>Performed by a qualified gynecologist</li>
        <li>Based on proper medical evaluation</li>
        <li>Explained clearly with realistic expectations</li>
        <li>Conducted using approved devices and protocols</li>
      </ul>
      <p>Patient safety, comfort, and informed consent are paramount.</p>

      <h2 id="emotional-wellbeing">Emotional and Psychological Well-being</h2>
      <p>Cosmetic gynecology can positively impact emotional health by addressing concerns that women may hesitate to discuss. A supportive clinical environment encourages open communication and empowers women to prioritize their intimate health.</p>

      <h2 id="when-to-consult-cosmetic">When Should You Consult a Gynecologist?</h2>
      <p>You should seek consultation if:</p>
      <ul>
        <li>Intimate concerns affect daily life or relationships</li>
        <li>You experience urinary leakage or vaginal discomfort</li>
        <li>Post-childbirth or menopausal changes concern you</li>
        <li>You want to explore safe, non-surgical options</li>
      </ul>
      <p>Early evaluation helps identify the most effective and appropriate treatment plan.</p>

      <h2 id="conclusion-cosmetic">Conclusion</h2>
      <p>Cosmetic gynecology is about enhancing feminine wellness—not changing identity. By addressing both functional and aesthetic concerns, it helps women feel comfortable, confident, and empowered at every stage of life. With expert care and ethical practice, cosmetic gynecology can significantly improve quality of life and intimate well-being.</p>
    `,
  },
  {
    id: 6,
    title: 'Cosmetic Gynecology: Enhancing Feminine Wellness',
    excerpt: 'Learn about cosmetic gynecology procedures and how they can improve quality of life.',
    date: '2023-12-15',
    category: 'Cosmetic Treatments',
    content: `
      <p>Cosmetic gynecology is an advanced area of women's healthcare that focuses on improving intimate health, comfort, function, and confidence. While the term "cosmetic" may suggest appearance alone, modern cosmetic gynecology goes far beyond aesthetics. It addresses functional concerns such as vaginal laxity, dryness, urinary incontinence, and post-childbirth or menopausal changes that can affect a woman's quality of life.</p>
      <p>With evolving medical technologies, cosmetic gynecology offers safe, non-surgical, and minimally invasive solutions tailored to a woman's individual needs.</p>

      <h2 id="what-is-cosmetic-gynecology">What Is Cosmetic Gynecology?</h2>
      <p>Cosmetic gynecology includes a range of medical and aesthetic procedures designed to enhance the health, function, and appearance of the female intimate area. These treatments aim to restore tissue tone, improve vaginal health, and address discomfort caused by aging, hormonal changes, or childbirth.</p>
      <p>Importantly, cosmetic gynecology prioritizes medical safety, functionality, and patient well-being, rather than cosmetic change alone.</p>

      <h2 id="why-wellness-matters">Why Feminine Wellness Matters</h2>
      <p>Intimate health plays a vital role in a woman's physical, emotional, and psychological well-being. Changes in the vaginal and pelvic region can lead to:</p>
      <ul>
        <li>Discomfort in daily activities</li>
        <li>Reduced confidence</li>
        <li>Sexual discomfort</li>
        <li>Urinary leakage</li>
        <li>Emotional distress</li>
      </ul>
      <p>Cosmetic gynecology helps women address these concerns in a respectful, confidential, and medically supervised environment.</p>

      <h2 id="common-concerns">Common Concerns Addressed by Cosmetic Gynecology</h2>
      <p>Women may seek cosmetic gynecology treatments for:</p>
      <ul>
        <li>Vaginal laxity after childbirth</li>
        <li>Vaginal dryness, especially after menopause</li>
        <li>Mild to moderate urinary incontinence</li>
        <li>Reduced vaginal tone or elasticity</li>
        <li>Discomfort during intimacy</li>
        <li>Post-delivery tissue changes</li>
      </ul>
      <p>Each concern is evaluated individually to determine the most appropriate treatment.</p>

      <h2 id="popular-treatments">Popular Cosmetic Gynecology Treatments</h2>

      <h3 id="non-surgical-tightening">Non-Surgical Vaginal Tightening</h3>
      <p>Advanced technologies such as radiofrequency or ultrasound-based treatments stimulate collagen production, helping improve vaginal tone and elasticity without surgery.</p>

      <h3 id="vaginal-dryness-treatment">Treatment for Vaginal Dryness and Atrophy</h3>
      <p>These treatments enhance tissue hydration, elasticity, and comfort, particularly beneficial for menopausal and post-menopausal women.</p>

      <h3 id="incontinence-management">Urinary Incontinence Management</h3>
      <p>Non-invasive procedures strengthen pelvic floor support and help reduce stress urinary incontinence, improving bladder control.</p>

      <h3 id="post-childbirth-rejuvenation">Post-Childbirth Vaginal Rejuvenation</h3>
      <p>Designed to restore vaginal tissue strength and comfort following childbirth, helping women regain confidence and comfort.</p>

      <h3 id="labial-treatments">Labial Comfort and Aesthetic Treatments</h3>
      <p>When medically appropriate, these treatments address discomfort or irritation while maintaining safety and realistic expectations.</p>

      <h2 id="benefits-wellness">Benefits of Cosmetic Gynecology</h2>
      <ul>
        <li>Enhances intimate comfort and hygiene</li>
        <li>Improves confidence and self-esteem</li>
        <li>Addresses functional concerns without surgery</li>
        <li>Minimal downtime and quick recovery</li>
        <li>Safe and effective under medical supervision</li>
      </ul>

      <h2 id="ideal-candidate-wellness">Who Is an Ideal Candidate?</h2>
      <p>Cosmetic gynecology may be suitable for women who:</p>
      <ul>
        <li>Experience discomfort or functional issues in the intimate area</li>
        <li>Have post-childbirth or menopausal changes</li>
        <li>Prefer non-surgical treatment options</li>
        <li>Seek improvement in intimate health and wellness</li>
      </ul>
      <p>A thorough consultation ensures the treatment is appropriate and safe.</p>

      <h2 id="safety-ethical">Safety and Ethical Practice</h2>
      <p>All cosmetic gynecology procedures should:</p>
      <ul>
        <li>Be performed by a qualified gynecologist</li>
        <li>Follow evidence-based medical protocols</li>
        <li>Include detailed counseling and informed consent</li>
        <li>Focus on patient safety and realistic outcomes</li>
      </ul>
      <p>Ethical practice and patient comfort are central to cosmetic gynecology care.</p>

      <h2 id="emotional-impact">Emotional and Psychological Impact</h2>
      <p>Intimate health concerns are often difficult to discuss. Cosmetic gynecology provides a supportive space for women to openly address these issues, leading to improved confidence, comfort, and overall well-being.</p>

      <h2 id="when-to-consult-wellness">When Should You Consult a Gynecologist?</h2>
      <p>You should seek professional advice if:</p>
      <ul>
        <li>Intimate concerns affect your daily life or relationships</li>
        <li>You experience urinary leakage or vaginal discomfort</li>
        <li>Post-childbirth or menopausal changes concern you</li>
        <li>You want safe, non-surgical treatment options</li>
      </ul>
      <p>Early consultation helps achieve better outcomes and long-term satisfaction.</p>

      <h2 id="conclusion-wellness">Conclusion</h2>
      <p>Cosmetic gynecology is about enhancing feminine wellness, not altering identity. By addressing both functional and aesthetic concerns, it empowers women to feel comfortable, confident, and in control of their intimate health. With expert medical care and a personalized approach, cosmetic gynecology can significantly improve quality of life at every stage.</p>
    `,
  },
]

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const post = blogPosts.find(p => p.id === parseInt(id))
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  return {
    title: `${post.title} - Dr. Aparna Ghosh Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = blogPosts.find(p => p.id === parseInt(id))

  if (!post) {
    notFound()
  }

  // Different themes for each blog post
  const themes: Record<number, {
    bg: string
    heroBg: string
    heroBorder: string
    articleBg: string
    articleBorder: string
    sidebarBg: string
    sidebarBorder: string
    ctaBg: string
    ctaBorder: string
    ctaButton: string
    h2Bg: string
    h2Border: string
    categoryBg: string
    categoryBorder: string
    fontFamily: string
  }> = {
    1: {
      bg: 'bg-pink-50',
      heroBg: 'bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100',
      heroBorder: 'border-pink-200',
      articleBg: 'bg-white',
      articleBorder: 'border-pink-200',
      sidebarBg: 'bg-pink-50',
      sidebarBorder: 'border-pink-200',
      ctaBg: 'bg-pink-100',
      ctaBorder: 'border-pink-300',
      ctaButton: 'bg-pink-600 hover:bg-pink-700',
      h2Bg: 'bg-pink-50',
      h2Border: 'border-pink-500',
      categoryBg: 'bg-pink-100',
      categoryBorder: 'border-pink-200',
      fontFamily: 'font-sans'
    },
    2: {
      bg: 'bg-blue-50',
      heroBg: 'bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100',
      heroBorder: 'border-blue-200',
      articleBg: 'bg-white',
      articleBorder: 'border-blue-200',
      sidebarBg: 'bg-blue-50',
      sidebarBorder: 'border-blue-200',
      ctaBg: 'bg-blue-100',
      ctaBorder: 'border-blue-300',
      ctaButton: 'bg-blue-600 hover:bg-blue-700',
      h2Bg: 'bg-blue-50',
      h2Border: 'border-blue-500',
      categoryBg: 'bg-blue-100',
      categoryBorder: 'border-blue-200',
      fontFamily: 'font-serif'
    },
    3: {
      bg: 'bg-purple-50',
      heroBg: 'bg-gradient-to-br from-purple-50 via-violet-50 to-purple-100',
      heroBorder: 'border-purple-200',
      articleBg: 'bg-white',
      articleBorder: 'border-purple-200',
      sidebarBg: 'bg-purple-50',
      sidebarBorder: 'border-purple-200',
      ctaBg: 'bg-purple-100',
      ctaBorder: 'border-purple-300',
      ctaButton: 'bg-purple-600 hover:bg-purple-700',
      h2Bg: 'bg-purple-50',
      h2Border: 'border-purple-500',
      categoryBg: 'bg-purple-100',
      categoryBorder: 'border-purple-200',
      fontFamily: 'font-sans'
    },
    4: {
      bg: 'bg-green-50',
      heroBg: 'bg-gradient-to-br from-green-50 via-emerald-50 to-green-100',
      heroBorder: 'border-green-200',
      articleBg: 'bg-white',
      articleBorder: 'border-green-200',
      sidebarBg: 'bg-green-50',
      sidebarBorder: 'border-green-200',
      ctaBg: 'bg-green-100',
      ctaBorder: 'border-green-300',
      ctaButton: 'bg-green-600 hover:bg-green-700',
      h2Bg: 'bg-green-50',
      h2Border: 'border-green-500',
      categoryBg: 'bg-green-100',
      categoryBorder: 'border-green-200',
      fontFamily: 'font-serif'
    },
    5: {
      bg: 'bg-orange-50',
      heroBg: 'bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100',
      heroBorder: 'border-orange-200',
      articleBg: 'bg-white',
      articleBorder: 'border-orange-200',
      sidebarBg: 'bg-orange-50',
      sidebarBorder: 'border-orange-200',
      ctaBg: 'bg-orange-100',
      ctaBorder: 'border-orange-300',
      ctaButton: 'bg-orange-600 hover:bg-orange-700',
      h2Bg: 'bg-orange-50',
      h2Border: 'border-orange-500',
      categoryBg: 'bg-orange-100',
      categoryBorder: 'border-orange-200',
      fontFamily: 'font-sans'
    },
    6: {
      bg: 'bg-rose-50',
      heroBg: 'bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100',
      heroBorder: 'border-rose-200',
      articleBg: 'bg-white',
      articleBorder: 'border-rose-200',
      sidebarBg: 'bg-rose-50',
      sidebarBorder: 'border-rose-200',
      ctaBg: 'bg-rose-100',
      ctaBorder: 'border-rose-300',
      ctaButton: 'bg-rose-600 hover:bg-rose-700',
      h2Bg: 'bg-rose-50',
      h2Border: 'border-rose-500',
      categoryBg: 'bg-rose-100',
      categoryBorder: 'border-rose-200',
      fontFamily: 'font-serif'
    }
  }

  const theme = themes[post.id] || themes[1]

  return (
    <div className={`min-h-screen ${theme.bg}`}>
      {/* Header */}
      <header className={`border-b ${theme.heroBorder} ${theme.heroBg}`}>
        <div className="w-full px-4 py-7">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <Link href="/" className="flex items-center gap-2.5 font-bold tracking-wide">
              <div className="w-8 h-8 rounded-[10px] bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 font-extrabold">
                DA
              </div>
              <div>
                <div>Dr. Aparna Ghosh</div>
                <div className="text-xs text-gray-600">Women's Health & Gynecology</div>
              </div>
            </Link>
            <nav className="flex items-center gap-3.5">
              <Link href="/services" className="text-gray-600 font-semibold text-sm hover:text-gray-900">Services</Link>
              <Link href="/about" className="text-gray-600 font-semibold text-sm hover:text-gray-900">About</Link>
              <Link href="/contact" className="text-gray-600 font-semibold text-sm hover:text-gray-900">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`border-b ${theme.heroBorder} ${theme.heroBg}`}>
        <div className="w-full px-4 py-6">
          <div className="mb-6 text-sm text-gray-600">
            <Link 
              href="/blog"
              className="hover:text-blue-600 transition-colors"
            >
              Blog
            </Link>
            <span className="text-gray-400 mx-2">/</span>
            <span>{post.title}</span>
          </div>
          <h1 className={`text-[2.1rem] leading-[1.2] tracking-[-0.3px] mb-2.5 font-bold text-gray-900 ${theme.fontFamily}`}>
            {post.title}
          </h1>
          <p className={`text-gray-600 text-[1.05rem] max-w-[70ch] mb-0 leading-relaxed ${theme.fontFamily}`}>
            {post.excerpt}
          </p>
          <div className="flex items-center gap-2.5 flex-wrap mt-3.5 text-gray-600 text-sm">
            <div className={`border ${theme.categoryBorder} ${theme.categoryBg} px-2.5 py-1.5 rounded-full text-xs font-medium text-gray-700`}>
              {post.category}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-5.5 pb-9">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-4.5 items-start max-w-[1400px] mx-auto">
            {/* Article */}
            <article className={`${theme.articleBg} border ${theme.articleBorder} rounded-[14px] shadow-[0_10px_25px_rgba(2,6,23,.06)] p-5.5`}>
              {('image' in post && typeof post.image === 'string' && post.image) && (
                <div className={`w-full ${theme.articleBg} rounded-2xl overflow-hidden mb-6`}>
                  <div className="relative w-full h-auto">
                    <Image
                      src={post.image}
                      alt="Dr Aparna Ghosh Gynecologist in Chembur"
                      width={1200}
                      height={1600}
                      className="w-full h-auto object-contain"
                      sizes="(max-width: 920px) 100vw, 680px"
                      priority
                    />
                  </div>
                </div>
              )}
              
              {post.content && (
                <div 
                  className={`prose prose-lg max-w-none ${theme.fontFamily}
                    prose-p:text-gray-700 prose-p:mb-4 prose-p:leading-[1.65] prose-p:text-base
                    prose-ul:text-gray-700 prose-ul:my-3 prose-ul:ml-4.5 prose-ul:pl-0 prose-ul:list-disc
                    prose-li:my-2 prose-li:leading-[1.65] prose-li:pl-0
                    prose-strong:text-gray-900 prose-strong:font-bold
                    [&_h2]:text-[1.6rem] [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:leading-tight [&_h2]:font-extrabold [&_h2]:text-gray-900 [&_h2]:px-4 [&_h2]:py-3 [&_h2]:rounded-lg [&_h2]:border-l-4 [&_h2]:tracking-tight
                    [&_h2:first-child]:mt-0
                    [&_h3]:text-[1.25rem] [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:font-bold [&_h3]:text-gray-800
                    [&_img]:max-w-[600px] [&_img]:w-full [&_img]:h-auto [&_img]:object-contain [&_img]:rounded-xl [&_img]:my-6 [&_img]:mx-auto [&_img]:block`}
                  dangerouslySetInnerHTML={{ 
                    __html: post.content.replace(
                      /<h2([^>]*)>/g, 
                      `<h2$1 class="${theme.h2Bg} ${theme.h2Border.replace('border-', 'border-l-4 border-')} px-4 py-3 rounded-lg">`
                    )
                  }} 
                />
              )}

              {/* CTA Section */}
              <div className={`mt-4.5 ${theme.ctaBg} border ${theme.ctaBorder} rounded-[14px] p-4 flex gap-3 items-start`}>
                <div className="flex-1">
                  <strong className="text-gray-900 block mb-2.5 text-base">
                    {post.id === 2 ? 'Benefits of Laser Hair Reduction' 
                      : post.id === 3 ? 'Need Expert HIFU Treatment?' 
                      : post.id === 4 ? 'Need Regular Gynecological Check-ups?'
                      : post.id === 5 ? 'Need Cosmetic Gynecology Treatment?'
                      : post.id === 6 ? 'Enhance Your Feminine Wellness'
                      : 'Need Expert Menopause Care?'}
                  </strong>
                  <p className="text-gray-600 text-sm mb-0 leading-relaxed">
                    {post.id === 2 
                      ? 'Consult with Dr. Aparna Ghosh for personalized laser hair reduction treatment and expert guidance.'
                      : post.id === 3
                      ? 'Consult with Dr. Aparna Ghosh for personalized HIFU treatment and urinary incontinence management.'
                      : post.id === 4
                      ? 'Schedule your regular gynecological check-up with Dr. Aparna Ghosh for comprehensive women\'s health care.'
                      : post.id === 5
                      ? 'Consult with Dr. Aparna Ghosh for personalized cosmetic gynecology treatments and intimate wellness care.'
                      : post.id === 6
                      ? 'Consult with Dr. Aparna Ghosh for personalized cosmetic gynecology treatments to enhance your feminine wellness and intimate health.'
                      : 'Consult with Dr. Aparna Ghosh for personalized menopause management and treatment options.'}
                  </p>
                  <Link 
                    href="/contact"
                    className={`inline-block mt-2.5 ${theme.ctaButton} text-white px-3.5 py-2.5 rounded-xl font-bold transition-all text-sm`}
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-3.5 space-y-3.5">
              <div className={`${theme.sidebarBg} border ${theme.sidebarBorder} rounded-[14px] shadow-[0_10px_25px_rgba(2,6,23,.06)] p-4`}>
                <h3 className="text-[1.05rem] font-semibold mb-2.5 text-gray-900 m-0">Table of Contents</h3>
                <nav className="space-y-1.5">
                  {post.id === 1 && (
                    <>
                      <a href="#what-is-menopause" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">What Is Menopause?</a>
                      <a href="#stages" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Stages of Menopause</a>
                      <a href="#symptoms" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Common Symptoms</a>
                      <a href="#health-risks" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Health Risks</a>
                      <a href="#management" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Management Options</a>
                    </>
                  )}
                  {post.id === 2 && (
                    <>
                      <a href="#what-is-laser-hair-reduction" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">What Is Laser Hair Reduction?</a>
                      <a href="#key-benefits" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Key Benefits</a>
                      <a href="#sessions-required" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Sessions Required</a>
                      <a href="#ideal-candidate" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Ideal Candidate</a>
                      <a href="#safety" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Safety</a>
                      <a href="#post-treatment-care" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Post-Treatment Care</a>
                      <a href="#consult-doctor" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">When to Consult</a>
                    </>
                  )}
                  {post.id === 3 && (
                    <>
                      <a href="#what-is-incontinence" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">What Is Urinary Incontinence?</a>
                      <a href="#types" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Types of Incontinence</a>
                      <a href="#what-is-hifu" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">What Is HIFU Treatment?</a>
                      <a href="#how-hifu-helps" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">How HIFU Helps</a>
                      <a href="#benefits" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Benefits</a>
                      <a href="#ideal-candidate-hifu" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Ideal Candidate</a>
                      <a href="#procedure" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">The Procedure</a>
                      <a href="#sessions-needed" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Sessions Needed</a>
                      <a href="#post-treatment-care-hifu" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Post-Treatment Care</a>
                      <a href="#safety-hifu" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Safety</a>
                      <a href="#consult-doctor-hifu" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">When to Consult</a>
                    </>
                  )}
                  {post.id === 4 && (
                    <>
                      <a href="#what-is-checkup" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">What Is a Gynecological Check-up?</a>
                      <a href="#why-important" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Why Regular Check-ups Are Important</a>
                      <a href="#how-often" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">How Often Should You Visit?</a>
                      <a href="#when-to-see" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">When to See a Gynecologist</a>
                      <a href="#overcoming-hesitation" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Overcoming Hesitation</a>
                    </>
                  )}
                  {post.id === 5 && (
                    <>
                      <a href="#common-treatments" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Common Treatments</a>
                      <a href="#vaginal-tightening" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Vaginal Tightening</a>
                      <a href="#vaginal-dryness" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Vaginal Dryness</a>
                      <a href="#urinary-incontinence-cosmetic" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Urinary Incontinence</a>
                      <a href="#benefits-cosmetic" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Benefits</a>
                      <a href="#ideal-candidate-cosmetic" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Ideal Candidate</a>
                      <a href="#safety-considerations" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Safety Considerations</a>
                      <a href="#when-to-consult-cosmetic" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">When to Consult</a>
                    </>
                  )}
                  {post.id === 6 && (
                    <>
                      <a href="#what-is-cosmetic-gynecology" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">What Is Cosmetic Gynecology?</a>
                      <a href="#why-wellness-matters" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Why Wellness Matters</a>
                      <a href="#common-concerns" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Common Concerns</a>
                      <a href="#popular-treatments" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Popular Treatments</a>
                      <a href="#benefits-wellness" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Benefits</a>
                      <a href="#ideal-candidate-wellness" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Ideal Candidate</a>
                      <a href="#safety-ethical" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Safety & Ethics</a>
                      <a href="#when-to-consult-wellness" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">When to Consult</a>
                    </>
                  )}
                </nav>
              </div>
              <div className={`${theme.sidebarBg} border ${theme.sidebarBorder} rounded-[14px] shadow-[0_10px_25px_rgba(2,6,23,.06)] p-4`}>
                <h3 className="text-[1.05rem] font-semibold mb-2.5 text-gray-900 m-0">Quick Contact</h3>
                <p className="text-sm text-gray-600 mb-0 leading-relaxed">Schedule your consultation today for expert care.</p>
                <Link 
                  href="/contact"
                  className="inline-block mt-2.5 text-blue-600 font-semibold text-sm hover:underline transition-all"
                >
                  Contact Us →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`border-t ${theme.heroBorder} ${theme.bg}`}>
        <div className="w-full px-4 py-6">
          <div className="flex gap-4 items-start justify-between flex-wrap">
            <div>
              <p className="text-sm text-gray-600 mb-1.5">&copy; {new Date().getFullYear()} Dr. Aparna Ghosh. All rights reserved.</p>
              <p className="text-sm text-gray-600 mb-0">Expert gynecologist in Chembur, Mumbai</p>
            </div>
            <div className="text-sm text-gray-600">
              <p className="mb-1.5">Phone: <a href="tel:+919326579679" className="text-blue-600 hover:underline">+91-9326579679</a>, <a href="tel:+919224222600" className="text-blue-600 hover:underline">+91-9224222600</a></p>
              <p className="mb-0">Email: <a href="mailto:aparnaghosh67@yahoo.co.in" className="text-blue-600 hover:underline">aparnaghosh67@yahoo.co.in</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

