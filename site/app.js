/**
 * REMMASHSERVICE INDUSTRIAL APPLICATION LOGIC
 * SUPERLATIVE BRUTALIST UX & PRODUCT INTERACTION
 */

// Product Database with authentic client specifications from the handoff package
const PRODUCTS_DATA = {
  dmp01: {
    id: "dmp01",
    title: "ДМП-01 EIS-60",
    category: "fire_doors",
    subtitle: "Противопожарная металлическая однопольная глухая дверь",
    image: "assets/doors/dmp_01.jpg",
    specs: {
      "Предел огнестойкости": "EIS-60 (60 минут пламя / дым)",
      "Стандарт": "ГОСТ Р 57327-2016 / ТР ЕАЭС 043/2017",
      "Материал полотна": "Холоднокатаная сталь 1.5–2.0 мм",
      "Заполнение": "Гидрофобизированная базальтовая плита 130 кг/м³ (НГ)",
      "Толщина створки": "60–75 мм с двойным притвором",
      "Уплотнители": "Резиновый D-профиль + терморасширяющаяся лента 150°C",
      "Замок": "Огнестойкий замок с термоблокировкой ригеля",
      "Покрытие": "Порошково-полимерное по шкале RAL"
    },
    desc: "Базовая и самая востребованная сертифицированная противопожарная дверь для технических помещений, серверных, лифтовых холлов, эвакуационных выходов и вентиляционных камер. Поставляется с номерным металлическим шильдом МЧС и паспортом изделия."
  },
  dmp02: {
    id: "dmp02",
    title: "ДМП-02 EIS-60",
    category: "fire_doors",
    subtitle: "Противопожарная металлическая двупольная дверь с системой «Антипаника»",
    image: "assets/doors/dmp_02.png",
    specs: {
      "Предел огнестойкости": "EIS-60 (60 минут дымогазонепроницаемость)",
      "Стандарт": "ГОСТ Р 57327-2016 / ГОСТ 31471-2011",
      "Ширина проема": "От 1200 до 1900 мм (неравнопольные и равнопольные)",
      "Эвакуация": "Штанга Push-Bar на активную или обе створки",
      "Заполнение": "Базальтовая минераловатная плита 130 кг/м³",
      "Петли": "4 усиленные петли на упорных закрытых подшипниках",
      "Доводчик": "Координатор закрывания створок (ФРД) + гидравлические доводчики",
      "Покрытие": "Полимерная порошковая краска (шагрень/глянец)"
    },
    desc: "Двупольный противопожарный блок повышенной пропускной способности. Предназначен для главных путей эвакуации торговых комплексов, производственных цехов, подземных паркингов и логистических центров."
  },
  dmpd01_glass: {
    id: "dmpd01_glass",
    title: "ДМПД-01 О EIW-60",
    category: "fire_doors",
    subtitle: "Противопожарная металлическая дверь с огнестойким остеклением до 25%",
    image: "assets/doors/dmpd_01_glass.png",
    specs: {
      "Предел огнестойкости": "EIW-60 (60 минут целостность / теплоизоляция)",
      "Стеклопакет": "Многослойное пожаростойкое стекло с гелевым полимером",
      "Площадь остекления": "До 25% площади полотна по нормам пожарной безопасности",
      "Толщина стекла": "22–28 мм (многослойный триплекс)",
      "Конструкция": "Стальной профиль 1.5 мм с термомостом",
      "Фурнитура": "Нержавеющая сталь AISI 304, евроцилиндр высокой секретности",
      "Сертификация": "Сертификат соответствия ТР ЕАЭС 043/2017"
    },
    desc: "Эстетичное решение для бизнес-центров, гостиниц, медицинских учреждений и коридоров общего пользования. Обеспечивает визуальный контроль пространства при сохранении полного огнестойкого барьера 60 минут."
  },
  lmp01: {
    id: "lmp01",
    title: "ЛМП-01 EI-60",
    category: "hatches",
    subtitle: "Противопожарный металлический люк стеновой / потолочный / напольный",
    image: "assets/doors/lmp_01.jpg",
    specs: {
      "Предел огнестойкости": "EI-60 (60 минут)",
      "Исполнение": "Стеновой, потолочный с выдвижной лестницей, напольный",
      "Сталь": "1.5 мм холоднокатаная сталь",
      "Заполнение": "Базальтовая плита плотностью 130 кг/м³",
      "Замок": "Тяговый ригельный противопожарный замок с ключом",
      "Уплотнение": "Терморасширяющаяся графитовая лента по контуру"
    },
    desc: "Противопожарный люк для герметизации ревизионных проемов, кабельных шахт, лифтовых машинных отделений и выходов на кровлю. Препятствует распространению огня по коммуникационным каналам."
  },
  windows: {
    id: "windows",
    title: "ОКНА И ФАСАДЫ EIW-60",
    category: "glass",
    subtitle: "Противопожарные алюминиевые окна и перегородки со специальным стеклопакетом",
    image: "assets/doors/windows_eiw.jpg",
    specs: {
      "Предел огнестойкости": "EIW-60 / EIW-30",
      "Профиль": "Алюминиевый с терморазрывом и композитным заполнением",
      "Стеклопакет": "Многослойный пожаростойкий триплекс с полимером",
      "Светопропускание": "Более 85%",
      "Монтаж": "Внутренний или наружный контур здания",
      "Сертификат": "ТР ЕАЭС 043/2017"
    },
    desc: "Светопрозрачные противопожарные перегородки и глухие окна для атриумов, холлов, лабораторий и переговорных зон. Сочетают воздушный архитектурный вид и надежную защиту от теплового излучения."
  },
  gates: {
    id: "gates",
    title: "ВОРОТА ВМ-02",
    category: "gates",
    subtitle: "Противопожарные распашные промышленные ворота с калиткой или без",
    image: "assets/doors/gates_vm02.png",
    specs: {
      "Предел огнестойкости": "EI-60 (60 минут)",
      "Габариты": "До 4000×4000 мм (любой индивидуальный размер)",
      "Калитка": "Встроенная противопожарная калитка с порогом",
      "Сталь": "1.8–2.0 мм усиленный гнутый профиль",
      "Электропривод": "Возможность подключения автоматики с разблокировкой от ОПС",
      "Петли": "Сверхпрочные опорные шарниры с пресс-масленками"
    },
    desc: "Крупногабаритные огнестойкие ворота для складских терминалов, логистических центров, подземных автостоянок и тяжелых промышленных цехов."
  }
};

// MOBILE BURGER MENU TOGGLE
function toggleMobileMenu() {
  const menu = document.getElementById("mobile_menu");
  if (!menu) return;
  const isHidden = menu.classList.contains("hidden");
  if (isHidden) {
    menu.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  } else {
    menu.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
}

// INITIALIZE EVENT LISTENERS
document.addEventListener("DOMContentLoaded", () => {
  // TOPBAR SCROLL LISTENER (NO BACKGROUND AT TOP, GLASSMORPHISM ON SCROLL)
  const topbar = document.getElementById("topbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      topbar.classList.add("scrolled");
    } else {
      topbar.classList.remove("scrolled");
    }
  });

  // CATEGORY FILTER LOGIC
  const catButtons = document.querySelectorAll(".cat_btn");
  const productCards = document.querySelectorAll(".product_card");

  catButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      catButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");

      productCards.forEach(card => {
        const cardCat = card.getAttribute("data-category");
        if (category === "all" || cardCat === category) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

// PRODUCT MODAL (WITHOUT CATEGORY OVERHEAD BADGE PER USER REQUEST)
function showProductModal(productId) {
  const product = PRODUCTS_DATA[productId];
  if (!product) return;

  const content = document.getElementById("modal_content");
  
  let specsHtml = "";
  for (const [key, val] of Object.entries(product.specs)) {
    specsHtml += `
      <div class="modal_spec_item detail_txt">
        <span class="gray">${key}</span>
        <span class="white">${val}</span>
      </div>
    `;
  }

  content.innerHTML = `
    <div class="modal_grid">
      <div class="modal_img_box">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="modal_details_box">
        <div>
          <h3 class="disp_txt_sm white">${product.title}</h3>
          <p class="body_txt gray" style="font-size: 16px; margin-top: 0.5rem;">${product.subtitle}</p>
        </div>

        <div class="modal_specs_list">
          ${specsHtml}
        </div>

        <p class="detail_txt gray" style="text-transform: none; font-size: 12px; line-height: 1.5;">
          ${product.desc}
        </p>

        <button class="btn_brutalist full_width" onclick="openOrderModal('Заказ модели: ${product.title}')">
          <span>ЗАКАЗАТЬ РАСЧЁТ ДЛЯ ЭТОЙ МОДЕЛИ ↗</span>
        </button>
      </div>
    </div>
  `;

  document.getElementById("product_modal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeProductModal(e) {
  if (e.target.id === "product_modal") {
    closeProductModalDirect();
  }
}

function closeProductModalDirect() {
  document.getElementById("product_modal").classList.add("hidden");
  document.body.style.overflow = "auto";
}

// ORDER MODAL
function openOrderModal(context) {
  closeProductModalDirect();
  const modal = document.getElementById("order_modal");
  const title = document.getElementById("modal_order_title");
  const desc = document.getElementById("modal_order_desc");

  if (context) {
    title.textContent = context.toUpperCase();
    desc.textContent = `Инженер завода «РемМашСервис» подготовит расчет стоимости и спецификацию по параметру: "${context}".`;
  } else {
    title.textContent = "РАСЧЁТ ПРОЕКТА";
    desc.textContent = "Оставьте контактные данные. Инженер свяжется с вами для уточнения открывания, размеров и комплектации.";
  }

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeOrderModal(e) {
  if (e.target.id === "order_modal") {
    closeOrderModalDirect();
  }
}

function closeOrderModalDirect() {
  document.getElementById("order_modal").classList.add("hidden");
  document.body.style.overflow = "auto";
}

// FORM SUBMISSIONS
function handleLeadSubmit(e) {
  e.preventDefault();
  const phone = document.getElementById("form_phone").value;
  const product = document.getElementById("form_product").value;
  const qty = document.getElementById("form_qty").value;

  alert(`СПАСИБО!\n\nВаша заявка принята:\nКонструкция: ${product}\nКоличество/размеры: ${qty || "По стандарту"}\nТелефон: ${phone}\n\nИнженер завода РемМашСервис свяжется с вами в течение 15 минут для передачи сметы.`);
  e.target.reset();
}

function handleModalLeadSubmit(e) {
  e.preventDefault();
  const phone = document.getElementById("modal_phone").value;
  const name = document.getElementById("modal_name").value;
  const comment = document.getElementById("modal_comment").value;

  alert(`СПАСИБО, ${name || "КОЛЛЕГА"}!\n\nВаша спецификация принята в инженерный расчет.\nТелефон: ${phone}\nПримечание: ${comment || "Базовый расчет"}\n\nМы подготовим КП с заводской гарантией в течение 15 минут.`);
  closeOrderModalDirect();
}

// ESC KEY LISTENER FOR MODALS
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProductModalDirect();
    closeOrderModalDirect();
  }
});
