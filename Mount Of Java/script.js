// Data Gunung
const gunungData = [
  {
    id: 1,
    nama: "Gunung Semeru",
    slug: "semeru",
    provinsi: "Jawa Timur",
    mdpl: "3.676",
    medan: "Berat",
    hargaSimaksi: "Rp 32.500",
    waktuPendakian: "2-3 hari",
    jalurPendakian: "Ranu Pani - Mahameru",
    tingkatKesulitan: "Sulit",
    sejarah:
      "Gunung Semeru, yang terletak di Jawa Timur, Indonesia, adalah gunung tertinggi di Pulau Jawa, dengan ketinggian mencapai 3.676 meter di atas permukaan laut. Gunung ini termasuk dalam kategori gunung api aktif yang memiliki sejarah panjang dalam aktivitas vulkaniknya. Sebagai bagian dari Taman Nasional Bromo Tengger Semeru (TNBTS), Semeru menjadi tempat yang menarik untuk para pendaki dan para ilmuwan yang mempelajari aktivitas vulkanik.nung Semeru, yang juga dikenal sebagai Mahameru (Gunung Agung), adalah gunung berapi tertinggi di Pulau Jawa. Nama Semeru berasal dari bahasa Sanskerta 'Sumeru' yang berarti gunung emas.",
    ceritaMasyarakat:
      "MMasyarakat sekitar Gunung Semeru hidup dengan berbagai cara dan tradisi yang sangat terikat dengan alam dan gunung itu sendiri. Desa-desa yang berada di kaki gunung Semeru, seperti Desa Sumber Wuluh, Desa Pronojiwo, dan beberapa desa lainnya, banyak mengandalkan pertanian sebagai mata pencaharian utama mereka. Mereka juga sering berinteraksi dengan pendaki yang datang untuk menaklukkan puncak gunung, yang pada umumnya adalah perjalanan yang menantang dan penuh dengan keindahan alam. asyarakat sekitar Gunung Semeru, terutama suku Tengger, memiliki hubungan yang erat dengan gunung ini. Mereka percaya bahwa Semeru adalah tempat bersemayamnya Selain bertani, masyarakat sekitar Semeru juga memiliki hubungan spiritual yang sangat kental dengan gunung tersebut. Gunung Semeru bukan hanya dianggap sebagai tempat yang memiliki potensi bahaya, tetapi juga sebagai simbol kekuatan dan keberanian. Banyak cerita yang beredar di masyarakat mengenai 'kekuatan gaib' yang terkait dengan gunung ini, serta penghormatan terhadapnya sebagai tempat tinggal para dewa.",
    mitosLegenda:
      "Salah satu tempat yang terkenal di sekitar Gunung Semeru adalah Danau Ranu Kumbolo, yang juga dikelilingi oleh cerita rakyat. Masyarakat setempat percaya bahwa danau ini adalah tempat yang sangat sakral, di mana segala hal yang berkaitan dengan kehidupan dan kematian dapat dipengaruhi. Ada cerita yang menyebutkan bahwa Ranu Kumbolo menjadi tempat pertemuan para roh untuk beristirahat. Bagi para pendaki, danau ini merupakan tempat yang memberikan ketenangan dan kedamaian sebelum melanjutkan perjalanan menuju puncak Semeru.",
  },
  {
    id: 2,
    nama: "Gunung Bromo",
    slug: "bromo",
    provinsi: "Jawa Timur",
    mdpl: "2.329",
    medan: "Mudah",
    hargaSimaksi: "Rp 29.000",
    waktuPendakian: "1 hari",
    jalurPendakian: "Cemoro Lawang",
    tingkatKesulitan: "Mudah",
    sejarah:
      "Gunung Bromo adalah bagian dari Taman Nasional Bromo Tengger Semeru dan merupakan salah satu gunung berapi paling terkenal di Indonesia. Nama Bromo berasal dari bahasa Sanskerta 'Brahma'.",
    ceritaMasyarakat:
      "Suku Tengger yang mendiami kawasan Bromo memiliki tradisi turun-temurun yang sangat kuat. Mereka mengadakan upacara Kasada setiap tahun sebagai ungkapan syukur.",
    mitosLegenda:
      "Legenda Roro Anteng dan Joko Seger menjadi dasar kepercayaan masyarakat Tengger. Konon, pasangan ini adalah nenek moyang suku Tengger yang berkorban untuk keselamatan rakyatnya.",
  },
  {
    id: 3,
    nama: "Gunung Merapi",
    slug: "merapi",
    provinsi: "Jawa Tengah/DIY",
    mdpl: "2.930",
    medan: "Sulit",
    hargaSimaksi: "Rp 15.000",
    waktuPendakian: "1-2 hari",
    jalurPendakian: "Selo, New Selo",
    tingkatKesulitan: "Ditutup",
    sejarah:
      "Gunung Merapi adalah salah satu gunung berapi paling aktif di dunia dan telah meletus secara teratur selama ribuan tahun. Nama Merapi berasal dari bahasa Jawa 'Meru' (gunung) dan 'Api' (api).",
    ceritaMasyarakat:
      "Masyarakat di sekitar Merapi memiliki hubungan spiritual yang kuat dengan gunung ini. Mereka percaya bahwa Merapi adalah 'tahta' Ratu Kidul dan tempat bersemayamnya roh-roh leluhur.",
    mitosLegenda:
      "Dalam mitologi Jawa, Merapi dipercaya sebagai tempat pertemuan dunia nyata dan gaib. Konon, Sultan Yogyakarta memiliki hubungan mistis dengan Merapi dan Pantai Selatan.",
  },
  {
    id: 4,
    nama: "Gunung Lawu",
    slug: "lawu",
    provinsi: "Jawa Tengah/Jawa Timur",
    mdpl: "3.265",
    medan: "Sedang",
    hargaSimaksi: "Rp 15.000",
    waktuPendakian: "1-2 hari",
    jalurPendakian: "Cemoro Sewu, Cemoro Kandang",
    tingkatKesulitan: "Sedang",
    sejarah:
      "Gunung Lawu memiliki sejarah yang sangat kaya, terutama terkait dengan Kerajaan Majapahit. Konon, Raja Brawijaya V, raja terakhir Majapahit, moksa di Gunung Lawu.",
    ceritaMasyarakat:
      "Masyarakat di sekitar Lawu menganggap gunung ini sebagai tempat yang sangat sakral. Banyak peziarah yang datang untuk bertapa dan mencari ketenangan spiritual.",
    mitosLegenda:
      "Legenda paling terkenal adalah tentang Raja Brawijaya V yang moksa di Gunung Lawu setelah Kerajaan Majapahit runtuh. Konon, raja ini masih menjaga spiritual Pulau Jawa.",
  },
  {
    id: 5,
    nama: "Gunung Merbabu",
    slug: "merbabu",
    provinsi: "Jawa Tengah",
    mdpl: "3.145",
    medan: "Sedang",
    hargaSimaksi: "Rp 15.000",
    waktuPendakian: "1-2 hari",
    jalurPendakian: "Selo, Wekas, Chuntel",
    tingkatKesulitan: "Sedang",
    sejarah:
      "Gunung Merbabu, yang berarti 'Gunung Abu', adalah gunung berapi yang sudah tidak aktif lagi. Dalam sejarah Jawa, Merbabu sering disebut sebagai 'saudara' Gunung Merapi.",
    ceritaMasyarakat:
      "Masyarakat di sekitar Merbabu memiliki tradisi yang kuat dalam menjaga kelestarian gunung. Mereka percaya bahwa Merbabu adalah 'kakak' dari Merapi yang lebih tenang.",
    mitosLegenda:
      "Legenda menyebutkan bahwa Merbabu dan Merapi adalah dua bersaudara yang saling menjaga keseimbangan alam Jawa Tengah.",
  },
  {
    id: 6,
    nama: "Gunung Sindoro",
    slug: "sindoro",
    provinsi: "Jawa Tengah",
    mdpl: "3.153",
    medan: "Sedang",
    hargaSimaksi: "Rp 15.000",
    waktuPendakian: "1-2 hari",
    jalurPendakian: "Kledung, Tambi",
    tingkatKesulitan: "Sedang",
    sejarah:
      "Gunung Sindoro adalah gunung berapi yang masih aktif dan merupakan bagian dari kompleks vulkanik Dieng. Nama Sindoro berasal dari bahasa Jawa kuno yang berarti 'gunung yang berdiri tegak'.",
    ceritaMasyarakat:
      "Masyarakat di sekitar Sindoro memiliki hubungan yang erat dengan gunung ini. Mereka percaya bahwa Sindoro memberikan kesuburan tanah dan air yang melimpah untuk pertanian.",
    mitosLegenda:
      "Legenda menyebutkan bahwa Sindoro dan Sumbing adalah sepasang kekasih yang dikutuk menjadi gunung karena cinta terlarang mereka.",
  },
  {
    id: 7,
    id: 7,
    nama: "Gunung Raung",
    slug: "raung",
    provinsi: "Jawa Timur",
    mdpl: "3.344",
    medan: "Sulit",
    hargaSimaksi: "Rp 30.000",
    waktuPendakian: "2-3 hari",
    jalurPendakian: "Kalibaru - Puncak Raung",
    tingkatKesulitan: "Sulit",
    sejarah:
      "Gunung Raung adalah salah satu gunung berapi aktif yang terletak di Jawa Timur. Gunung ini terkenal dengan letusannya yang cukup besar dan berbahaya.",
    ceritaMasyarakat:
      "Masyarakat sekitar Gunung Raung percaya bahwa gunung ini memiliki kekuatan magis dan sering digunakan sebagai tempat bertapa.",
    mitosLegenda:
      "Konon, Gunung Raung merupakan tempat persembunyian para raksasa yang pernah mendominasi Jawa.",
  },
]

// Function untuk render card gunung
function renderMountainCards() {
  const container = document.getElementById("mountainsGrid")

  gunungData.forEach((gunung) => {
    const difficultyClass = `difficulty-${gunung.tingkatKesulitan.toLowerCase()}`

    const card = document.createElement("div")
    card.className = "mountain-card"
    card.innerHTML = `
            <div class="mountain-image" style="background-image: url('images/${gunung.slug}.jpg');">
                <div class="difficulty-badge ${difficultyClass}">
                ${gunung.tingkatKesulitan}              
                </div>
            </div>
            <div class="mountain-content">
                <div class="mountain-header">
                    <h3 class="mountain-name">${gunung.nama}</h3>
                    <span class="mountain-height">${gunung.mdpl} MDPL</span>
                </div>
                <div class="mountain-info">
                    <div class="info-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${gunung.provinsi}</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-dollar-sign"></i>
                        <span>Simaksi: ${gunung.hargaSimaksi}</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-clock"></i>
                        <span>Waktu: ${gunung.waktuPendakian}</span>
                    </div>
                </div>
                <button class="btn btn-outline" onclick="showMountainDetail('${gunung.slug}')">
                    Lihat Detail
                </button>
            </div>
        `

    container.appendChild(card)
  })
}

// Function untuk menampilkan detail gunung
function showMountainDetail(slug) {
  const gunung = gunungData.find((g) => g.slug === slug)
  if (!gunung) return

  // Buat modal atau redirect ke halaman detail
  const modal = document.createElement("div")
  modal.className = "modal"
  modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${gunung.nama}</h2>
                <button class="close-btn" onclick="closeModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="detail-section">
                    <h3><i class="fas fa-book"></i> Sejarah</h3>
                    <p>${gunung.sejarah}</p>
                </div>
                <div class="detail-section">
                    <h3><i class="fas fa-heart"></i> Cerita Masyarakat</h3>
                    <p>${gunung.ceritaMasyarakat}</p>
                </div>
                <div class="detail-section">
                    <h3><i class="fas fa-star"></i> Mitos dan Legenda</h3>
                    <p>${gunung.mitosLegenda}</p>
                </div>
                <div class="detail-info">
                    <div class="info-grid">
                        <div class="info-item">
                            <strong>MDPL:</strong> ${gunung.mdpl}m
                        </div>
                        <div class="info-item">
                            <strong>Provinsi:</strong> ${gunung.provinsi}
                        </div>
                        <div class="info-item">
                            <strong>Simaksi:</strong> ${gunung.hargaSimaksi}
                        </div>
                        <div class="info-item">
                            <strong>Waktu:</strong> ${gunung.waktuPendakian}
                        </div>
                        <div class="info-item">
                            <strong>Jalur:</strong> ${gunung.jalurPendakian}
                        </div>
                        <div class="info-item">
                            <strong>Tingkat:</strong> ${gunung.tingkatKesulitan}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `

  document.body.appendChild(modal)

  // Add modal styles
  if (!document.getElementById("modalStyles")) {
    const style = document.createElement("style")
    style.id = "modalStyles"
    style.textContent = `
            .modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
                animation: fadeIn 0.3s ease;
            }
            
            .modal-content {
                background: white;
                border-radius: 12px;
                max-width: 800px;
                max-height: 90vh;
                overflow-y: auto;
                margin: 20px;
                animation: slideIn 0.3s ease;
            }
            
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 2rem;
                border-bottom: 1px solid #e5e7eb;
            }
            
            .modal-header h2 {
                color: #1f2937;
                margin: 0;
            }
            
            .close-btn {
                background: none;
                border: none;
                font-size: 2rem;
                cursor: pointer;
                color: #6b7280;
                padding: 0;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: background 0.3s;
            }
            
            .close-btn:hover {
                background: #f3f4f6;
            }
            
            .modal-body {
                padding: 2rem;
            }
            
            .detail-section {
                margin-bottom: 2rem;
            }
            
            .detail-section h3 {
                color: #16a34a;
                margin-bottom: 1rem;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .detail-section p {
                line-height: 1.8;
                color: #4b5563;
            }
            
            .detail-info {
                background: #f9fafb;
                padding: 1.5rem;
                border-radius: 8px;
                margin-top: 2rem;
            }
            
            .info-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
            }
            
            .info-item {
                padding: 0.5rem 0;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideIn {
                from { transform: translateY(-50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        `
    document.head.appendChild(style)
  }
}

// Function untuk menutup modal
function closeModal() {
  const modal = document.querySelector(".modal")
  if (modal) {
    modal.remove()
  }
}

// Smooth scrolling untuk navigation
document.addEventListener("DOMContentLoaded", () => {
  // Render mountain cards
  renderMountainCards()

  // Add smooth scrolling to navigation links dengan OFFSET
  const navLinks = document.querySelectorAll(".nav-menu a")
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)
      
      if (targetSection) {
        // Hitung tinggi header + padding extra
        const headerHeight = document.querySelector('.header').offsetHeight
        const extraOffset = 20 // padding tambahan
        const targetPosition = targetSection.offsetTop - headerHeight - extraOffset
        
        // Scroll dengan offset
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    })
  })

  // Close modal when clicking outside
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      closeModal()
    }
  })

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal()
    }
  })
})

// Add scroll effect to header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.95)"
    header.style.backdropFilter = "blur(10px)"
  } else {
    header.style.background = "white"
    header.style.backdropFilter = "none"
  }
})

// Kalkulator Berat Carrier
document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateCarrierWeight);
    }
});

function calculateCarrierWeight() {
    // Ambil nilai dari form
    const bodyWeight = parseFloat(document.getElementById('bodyWeight').value);
    const hikingDuration = parseInt(document.getElementById('hikingDuration').value);
    const terrainDifficulty = parseInt(document.getElementById('terrainDifficulty').value);
    const weatherCondition = parseInt(document.getElementById('weatherCondition').value);
    const groupSize = parseInt(document.getElementById('groupSize').value);
    const experienceLevel = parseInt(document.getElementById('experienceLevel').value);

    // Validasi input
    if (!bodyWeight || !hikingDuration || !terrainDifficulty || !weatherCondition || !groupSize || !experienceLevel) {
        alert('Mohon lengkapi semua field!');
        return;
    }

    // Tampilkan loading
    const resultContainer = document.getElementById('calculatorResult');
    resultContainer.innerHTML = `
        <div class="loading">
            <div class="loading-spinner"></div>
        </div>
    `;

    // Simulasi loading
    setTimeout(() => {
        const result = calculateClientSide(bodyWeight, hikingDuration, terrainDifficulty, 
                                          weatherCondition, groupSize, experienceLevel);
        displayResult(result);
    }, 1500);
}

function calculateClientSide(bodyWeight, hikingDuration, terrainDifficulty, weatherCondition, groupSize, experienceLevel) {
    // Base weight calculation (10-20% dari berat badan)
    let basePercentage;
    if (experienceLevel === 1) {
        basePercentage = 0.10;
    } else if (experienceLevel === 2) {
        basePercentage = 0.15;
    } else {
        basePercentage = 0.20;
    }
    
    const baseWeight = bodyWeight * basePercentage;
    
    // Adjustment factors
    const durationFactor = 1 + (hikingDuration - 1) * 0.15;
    const terrainFactor = 1 + (terrainDifficulty - 1) * 0.1;
    const weatherFactor = 1 + (weatherCondition - 1) * 0.05;
    const groupFactor = Math.max(0.8, 1 - (groupSize - 1) * 0.05);
    
    // Calculate final weight
    const recommendedWeight = baseWeight * durationFactor * terrainFactor * weatherFactor * groupFactor;
    
    // Safety limits
    const maxSafeWeight = bodyWeight * 0.25;
    const minWeight = bodyWeight * 0.08;
    
    const finalWeight = Math.min(Math.max(recommendedWeight, minWeight), maxSafeWeight);
    
    // Equipment recommendations
    const essentialWeight = 6.5 + (hikingDuration * 1.8);
    const remainingBudget = finalWeight - essentialWeight;
    
    const canBring = remainingBudget > 0 ? [
        { item: 'Tenda', weight: 2.5 },
        { item: 'Kompor portable', weight: 0.4 },
        { item: 'Peralatan masak', weight: 0.6 },
        { item: 'Pakaian ganti', weight: 1.0 }
    ].filter(item => remainingBudget >= item.weight) : [];
    
    const shouldLeave = remainingBudget < 2 ? [
        { item: 'Kamera', weight: 0.5 },
        { item: 'Peralatan tambahan', weight: 1.0 }
    ] : [];
    
    return {
        recommended_weight: Math.round(finalWeight * 10) / 10,
        min_weight: Math.round(minWeight * 10) / 10,
        max_weight: Math.round(maxSafeWeight * 10) / 10,
        base_weight: Math.round(baseWeight * 10) / 10,
        factors: {
            duration: Math.round(durationFactor * 100) / 100,
            terrain: Math.round(terrainFactor * 100) / 100,
            weather: Math.round(weatherFactor * 100) / 100,
            group: Math.round(groupFactor * 100) / 100
        },
        equipment: {
            essential_weight: Math.round(essentialWeight * 10) / 10,
            remaining_budget: Math.round(remainingBudget * 10) / 10,
            can_bring: canBring,
            should_leave: shouldLeave
        }
    };
}

function displayResult(data) {
    const resultContainer = document.getElementById('calculatorResult');
    
    resultContainer.innerHTML = `
        <div class="result-content" style="display: block;">
            <h3 style="margin-bottom: 1.5rem; color: #1f2937;">
                <i class="fas fa-chart-line" style="color: #16a34a; margin-right: 10px;"></i>
                Hasil Perhitungan
            </h3>
            
            <div class="result-weight">
                <div class="weight-value">${data.recommended_weight} kg</div>
                <div style="color: #6b7280;">Berat Carrier yang Direkomendasikan</div>
                
                <div class="weight-range">
                    <div class="weight-min">
                        <div class="value">${data.min_weight} kg</div>
                        <div class="label">Minimum</div>
                    </div>
                    <div class="weight-max">
                        <div class="value">${data.max_weight} kg</div>
                        <div class="label">Maksimum Aman</div>
                    </div>
                </div>
            </div>
            
            <div class="factors-section">
                <h4 style="color: #4b5563; margin-bottom: 0.5rem;">Faktor Penyesuaian:</h4>
                <div class="factors-grid">
                    <div class="factor-item">Durasi: ${data.factors.duration}x</div>
                    <div class="factor-item">Medan: ${data.factors.terrain}x</div>
                    <div class="factor-item">Cuaca: ${data.factors.weather}x</div>
                    <div class="factor-item">Grup: ${data.factors.group}x</div>
                </div>
            </div>
            
            <div class="equipment-section">
                <h4 style="color: #4b5563; margin-bottom: 1rem;">
                    <i class="fas fa-backpack" style="color: #16a34a; margin-right: 8px;"></i>
                    Rekomendasi Peralatan:
                </h4>
                <div style="background: #f0f9ff; padding: 1rem; border-radius: 6px; margin-bottom: 1rem;">
                    <div>Berat peralatan wajib: <strong>${data.equipment.essential_weight} kg</strong></div>
                    <div>Sisa budget berat: <strong>${data.equipment.remaining_budget} kg</strong></div>
                </div>
                
                ${data.equipment.can_bring.length > 0 ? `
                    <div class="equipment-list">
                        <h5 style="color: #16a34a; margin-bottom: 0.5rem;">
                            <i class="fas fa-check-circle"></i> Peralatan yang bisa dibawa:
                        </h5>
                        ${data.equipment.can_bring.map(item => `
                            <div class="equipment-item">
                                <span>${item.item}</span>
                                <span style="color: #6b7280;">${item.weight} kg</span>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                
                ${data.equipment.should_leave.length > 0 ? `
                    <div class="equipment-list" style="margin-top: 1rem;">
                        <h5 style="color: #dc2626; margin-bottom: 0.5rem;">
                            <i class="fas fa-exclamation-triangle"></i> Peralatan yang sebaiknya ditinggal:
                        </h5>
                        ${data.equipment.should_leave.map(item => `
                            <div class="equipment-item">
                                <span>${item.item}</span>
                                <span style="color: #6b7280;">${item.weight} kg</span>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}