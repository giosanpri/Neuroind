/* ==========================================================================
   PORTAL INTERACTIVO POSGRADOS EN NEUROPSICOLOGÍA - USB BOGOTÁ
   Lógica de Aplicación, Datos del Plan de Estudios y Modales Interactivos
   ========================================================================== */

// Base de Datos Oficial Asignaturas y Créditos
const COURSE_DATABASE = [
  // SEMESTRE 1 (15 Créditos)
  {
    id: 's1-neurociencias',
    semester: 1,
    name: 'Neurociencias Cognitivas y Teorías Neuropsicológicas',
    credits: 4,
    area: 'teorica',
    areaLabel: 'Fundamentación',
    description: 'Estudio de las bases neurobiológicas de los procesos cognitivos superiores. Análisis exhaustivo de los modelos teóricos contemporáneos de la estructura y función del cerebro humano.',
    competencies: 'Comprender los circuitos neuroanatómicos de la cognición y aplicar modelos neuropsicológicos teóricos al análisis de casos clínicos.'
  },
  {
    id: 's1-neurodesarrollo',
    semester: 1,
    name: 'Neurodesarrollo',
    credits: 2,
    area: 'teorica',
    areaLabel: 'Evolutiva',
    description: 'Principios y etapas del desarrollo del sistema nervioso central desde la etapa embrionaria hasta la adolescencia. Identificación de hitos y factores de riesgo.',
    competencies: 'Analizar la maduración neurobiológica y detectar variaciones atípicas en el curso del desarrollo infantil.'
  },
  {
    id: 's1-evaluacion',
    semester: 1,
    name: 'Evaluación y Diagnóstico Neuropsicológico',
    credits: 3,
    area: 'diagnostico',
    areaLabel: 'Diagnóstico',
    description: 'Metodología de la evaluación neuropsicológica clínica. Selección, administración e interpretación de baterías psicométricas y neuropsicológicas estandarizadas.',
    competencies: 'Diseñar protocolos de evaluación individualizados y formular diagnósticos neuropsicológicos sintomáticos y etiológicos.'
  },
  {
    id: 's1-casos',
    semester: 1,
    name: 'Seminario de Casos I',
    credits: 1,
    area: 'casos',
    areaLabel: 'Integración',
    description: 'Discusión y presentación clínica guiada de casos en evaluación neuropsicológica. Integración teóricopráctica.',
    competencies: 'Presentar y discutir hallazgos clínicos con rigor científico ante comités y sesiones clínicas.'
  },
  {
    id: 's1-electivo',
    semester: 1,
    name: 'Seminario Electivo I',
    credits: 2,
    area: 'electiva',
    areaLabel: 'Electiva',
    description: 'Temáticas de profundización optativa en neuropsicología aplicada y avances emergentes.',
    competencies: 'Ampliar el espectro conceptual en subcampos especializados de la neuropsicología.'
  },
  {
    id: 's1-practica',
    semester: 1,
    name: 'Práctica Profesional Supervisada I',
    credits: 3,
    area: 'practica',
    areaLabel: 'Práctica CAP',
    description: 'Primer nivel de inmersión en el CAP Fray Eloy Londoño. Observador activo en evaluaciones neuropsicológicas y aplicación guiada de pruebas.',
    competencies: 'Desarrollar habilidades de entrevista clínica, administración de baterías y elaboración de informes preliminares.'
  },

  // SEMESTRE 2 (13 Créditos)
  {
    id: 's2-trastornos',
    semester: 2,
    name: 'Trastornos Neuropsicológicos',
    credits: 4,
    area: 'diagnostico',
    areaLabel: 'Diagnóstico',
    description: 'Estudio de los grandes síndromes neuropsicológicos (Afasias, Amnesias, Apraxias, Agnosias, Síndrome Disejecutivo) originados por daño cerebral adquirido o neurodegeneración.',
    competencies: 'Caracterizar y diferenciar perfiles neuropsicológicos complejos en pacientes adultos y adultos mayores.'
  },
  {
    id: 's2-metodos-inv',
    semester: 2,
    name: 'Métodos de Investigación',
    credits: 2,
    area: 'investigacion',
    areaLabel: 'Investigación',
    description: 'Diseños metodológicos aplicados a las neurociencias del comportamiento. Formulación de problemas de investigación y análisis de datos.',
    competencies: 'Diseñar proyectos de investigación clínica estructurados y seleccionar análisis estadísticos pertinentes.'
  },
  {
    id: 's2-sem-inv',
    semester: 2,
    name: 'Seminario de Investigación',
    credits: 1,
    area: 'investigacion',
    areaLabel: 'Investigación',
    description: 'Construcción del marco teórico y delimitación del estudio de caso o propuesta de grado.',
    competencies: 'Revisar críticamente literatura científica indexada e integrar evidencia de alto impacto.'
  },
  {
    id: 's2-casos',
    semester: 2,
    name: 'Seminario de Casos II',
    credits: 1,
    area: 'casos',
    areaLabel: 'Integración',
    description: 'Análisis profundo e independiente de perfiles de evaluación neuropsicológica complejos.',
    competencies: 'Elaborar diagnósticos diferenciales sólidos y sustentar devoluciones a pacientes y familias.'
  },
  {
    id: 's2-electivo',
    semester: 2,
    name: 'Seminario Electivo II',
    credits: 2,
    area: 'electiva',
    areaLabel: 'Electiva',
    description: 'Módulo electivo en herramientas complementarias de diagnóstico o especialidades afines.',
    competencies: 'Profundizar en abordajes específicos acordes a las líneas de interés del estudiante.'
  },
  {
    id: 's2-practica',
    semester: 2,
    name: 'Práctica Profesional Supervisada II',
    credits: 3,
    area: 'practica',
    areaLabel: 'Práctica CAP',
    description: 'Ejercitación clínica autónoma en evaluación neuropsicológica, entrega formal de resultados y formulación de estudio de caso especialista.',
    competencies: 'Llevar a cabo procesos completos de evaluación neuropsicológica con supervisión directa e integrar hallazgos a la historia clínica.'
  },

  // SEMESTRE 3 (11 Créditos - Exclusivo Maestría)
  {
    id: 's3-rehabilitacion',
    semester: 3,
    name: 'Habilitación y Rehabilitación Neuropsicológica I',
    credits: 2,
    area: 'rehabilitacion',
    areaLabel: 'Rehabilitación',
    description: 'Fundamentos de la neuroplasticidad y principios de restauración, compensación y sustitución cognitiva en pacientes con alteración cerebral.',
    competencies: 'Diseñar planes individualizados de intervención neuropsicológica basados en objetivos funcionales.'
  },
  {
    id: 's3-lineas-prof',
    semester: 3,
    name: 'Líneas Electivas de Profundización I',
    credits: 2,
    area: 'electiva',
    areaLabel: 'Profundización',
    description: 'Cursos especializados en neuropsicología infantil, del adulto o neurodegeneración.',
    competencies: 'Aplicar estrategias de intervención avanzada en subpoblaciones específicas.'
  },
  {
    id: 's3-metodos-aplicados',
    semester: 3,
    name: 'Métodos de Investigación Aplicados',
    credits: 2,
    area: 'investigacion',
    areaLabel: 'Investigación',
    description: 'Instrumentación y metodologías experimentales/clínicas aplicadas al desarrollo de tesis de maestría.',
    competencies: 'Ejecutar recolección de datos y sistematización de variables científicas.'
  },
  {
    id: 's3-trabajo-grado',
    semester: 3,
    name: 'Seminario de Investigación y Trabajo de Grado I',
    credits: 2,
    area: 'investigacion',
    areaLabel: 'Tesis Maestría',
    description: 'Desarrollo y avance de la propuesta de investigación para la obtención del título de Magíster.',
    competencies: 'Avanzar en el trabajo empírico o teórico de maestría con acompañamiento tutorial.'
  },
  {
    id: 's3-casos',
    semester: 3,
    name: 'Seminario de Casos III',
    credits: 1,
    area: 'casos',
    areaLabel: 'Integración',
    description: 'Supervisión y discusión clínica enfocada en programas de rehabilitación neuropsicológica en ejecución.',
    competencies: 'Evaluar la eficacia del plan de intervención y realizar ajustes terapéuticos.'
  },
  {
    id: 's3-practica',
    semester: 3,
    name: 'Práctica Profesional Supervisada III',
    credits: 2,
    area: 'practica',
    areaLabel: 'Práctica CAP',
    description: 'Implementación de programas de rehabilitación y seguimiento directo a pacientes en el CAP y centros en convenio.',
    competencies: 'Ejecutar sesiones de intervención neuropsicológica y argumentar terapéuticamente el avance.'
  },

  // SEMESTRE 4 (13 Créditos - Exclusivo Maestría)
  {
    id: 's4-rehabilitacion',
    semester: 4,
    name: 'Habilitación y Rehabilitación Neuropsicológica II',
    credits: 2,
    area: 'rehabilitacion',
    areaLabel: 'Rehabilitación',
    description: 'Abordaje holístico e interdisciplinario, modificación de conducta y adaptación ambiental/tecnológica en rehabilitación neuropsicológica.',
    competencies: 'Integrar a la familia y equipo interdisciplinario en la reincorporación social y laboral del paciente.'
  },
  {
    id: 's4-lineas-prof',
    semester: 4,
    name: 'Líneas Electivas de Profundización II',
    credits: 2,
    area: 'electiva',
    areaLabel: 'Profundización',
    description: 'Profundización avanzada en neuromodulación, tecnología de rehabilitación asistida y neuropsicología forense/escolar.',
    competencies: 'Utilizar tecnología de vanguardia y peritaje neuropsicológico.'
  },
  {
    id: 's4-trabajo-grado',
    semester: 4,
    name: 'Seminario de Investigación y Trabajo de Grado II',
    credits: 4,
    area: 'investigacion',
    areaLabel: 'Tesis Maestría',
    description: 'Finalización, redacción del artículo de investigación y sustento público del trabajo de grado de Maestría.',
    competencies: 'Defender la tesis de maestría y publicar aportes originales a la neuropsicología clínica.'
  },
  {
    id: 's4-casos',
    semester: 4,
    name: 'Seminario de Casos IV',
    credits: 2,
    area: 'casos',
    areaLabel: 'Integración',
    description: 'Seminario de integración clínica avanzada y cierre de casos complejos de intervención.',
    competencies: 'Sustentar el impacto clínico alcanzado y la restitución funcional del usuario.'
  },
  {
    id: 's4-electivo',
    semester: 4,
    name: 'Seminario Electivo III',
    credits: 1,
    area: 'electiva',
    areaLabel: 'Electiva',
    description: 'Cierre electivo en ética, bioética y gestión de unidades neuropsicológicas.',
    competencies: 'Liderar unidades clínicas de neuropsicología con apego estricto al código bioético.'
  },
  {
    id: 's4-practica',
    semester: 4,
    name: 'Práctica Profesional Supervisada IV',
    credits: 2,
    area: 'practica',
    areaLabel: 'Práctica CAP',
    description: 'Nivel máximo de práctica clínica experta, consolidación del perfil profesional y liderazgo de casos.',
    competencies: 'Consolidar la autonomía clínica completa en evaluación, diagnóstico e intervención neuropsicológica.'
  }
];

// Estado Global de la Aplicación
let currentProgramMode = 'maestria'; // 'especializacion' (28 cr) | 'maestria' (52 cr)
let selectedAreaFilter = 'all';

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  initProgramSwitcher();
  initAreaFilters();
  renderCurriculumGrid();
  initModalListeners();
  updateCreditSimulator();
});

// Switcher entre Especialización (28 cr) y Maestría (52 cr)
function initProgramSwitcher() {
  const btnEsp = document.getElementById('btn-especializacion');
  const btnMae = document.getElementById('btn-maestria');

  btnEsp.addEventListener('click', () => {
    currentProgramMode = 'especializacion';
    btnEsp.classList.add('active');
    btnMae.classList.remove('active');
    renderCurriculumGrid();
    updateCreditSimulator();
  });

  btnMae.addEventListener('click', () => {
    currentProgramMode = 'maestria';
    btnMae.classList.add('active');
    btnEsp.classList.remove('active');
    renderCurriculumGrid();
    updateCreditSimulator();
  });
}

// Filtros por Áreas de Conocimiento
function initAreaFilters() {
  const chips = document.querySelectorAll('.area-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedAreaFilter = chip.dataset.area;
      applyAreaFilter();
    });
  });
}

function applyAreaFilter() {
  const cards = document.querySelectorAll('.course-card');
  cards.forEach(card => {
    if (selectedAreaFilter === 'all' || card.dataset.area === selectedAreaFilter) {
      card.style.display = 'flex';
      card.classList.add('highlighted');
    } else {
      card.style.display = 'none';
      card.classList.remove('highlighted');
    }
  });
}

// Renderizado del Grafo / Grid del Plan de Estudios
function renderCurriculumGrid() {
  const gridContainer = document.getElementById('curriculum-grid');
  gridContainer.innerHTML = '';

  const maxSemester = currentProgramMode === 'especializacion' ? 2 : 4;

  for (let sem = 1; sem <= 4; sem++) {
    const isSemActive = sem <= maxSemester;
    const semCourses = COURSE_DATABASE.filter(c => c.semester === sem);
    const semCredits = semCourses.reduce((acc, c) => acc + c.credits, 0);

    const semCol = document.createElement('div');
    semCol.className = `semester-column ${isSemActive ? '' : 'disabled'}`;
    semCol.dataset.semester = sem;

    semCol.innerHTML = `
      <div class="semester-header">
        <span class="semester-num">Semestre 0${sem}</span>
        <h3 class="semester-title">${getSemesterName(sem)}</h3>
        <div class="semester-credits-sum">Suma: <strong>${semCredits} Créditos</strong></div>
      </div>
      <div class="semester-courses-list" id="sem-list-${sem}"></div>
    `;

    gridContainer.appendChild(semCol);

    const listContainer = semCol.querySelector(`#sem-list-${sem}`);

    semCourses.forEach(course => {
      const card = createCourseCardHTML(course);
      listContainer.appendChild(card);
    });
  }

  applyAreaFilter();
}

function getSemesterName(sem) {
  const names = { 1: 'Primer Semestre', 2: 'Segundo Semestre', 3: 'Tercer Semestre', 4: 'Cuarto Semestre' };
  return names[sem] || '';
}

// Generación de Tarjetas de Asignatura (Nodos)
function createCourseCardHTML(course) {
  const card = document.createElement('div');
  card.className = `course-card type-${course.area}`;
  card.dataset.id = course.id;
  card.dataset.area = course.area;

  card.innerHTML = `
    <div class="course-top">
      <h4 class="course-name">${course.name}</h4>
      <div class="credit-badge-circle" title="${course.credits} Créditos Académicos">
        ${course.credits}
      </div>
    </div>
    <div class="course-footer">
      <span class="course-area-label">${course.areaLabel}</span>
      <span class="course-action-hint">Ver Detalle ➔</span>
    </div>
  `;

  card.addEventListener('click', () => openCourseModal(course));
  return card;
}

// Simulador de Créditos en Tiempo Real
function updateCreditSimulator() {
  const targetTotal = currentProgramMode === 'especializacion' ? 28 : 52;
  const programLabel = currentProgramMode === 'especializacion' ? 'Especialización en Evaluación y Diagnóstico' : 'Maestría en Neuropsicología Clínica';

  document.getElementById('sim-program-name').textContent = programLabel;
  document.getElementById('sim-target-credits').textContent = `${targetTotal} Créditos`;
  document.getElementById('sim-total-badge').textContent = `${targetTotal} CR`;
  
  const fillBar = document.getElementById('sim-fill-bar');
  fillBar.style.width = '100%';
}

// Modal de Detalle de Asignatura
function initModalListeners() {
  const modalOverlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close-btn');

  closeBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openCourseModal(course) {
  const modalOverlay = document.getElementById('modal-overlay');
  
  document.getElementById('modal-course-name').textContent = course.name;
  document.getElementById('modal-course-credits').textContent = `${course.credits} Créditos Académicos`;
  document.getElementById('modal-course-area').textContent = course.areaLabel;
  document.getElementById('modal-course-semester').textContent = `Semestre ${course.semester}`;
  document.getElementById('modal-course-description').textContent = course.description;
  document.getElementById('modal-course-competencies').textContent = course.competencies;

  modalOverlay.classList.add('active');
}

function closeModal() {
  const modalOverlay = document.getElementById('modal-overlay');
  modalOverlay.classList.remove('active');
}

// Función auxiliar de copiado de correos de contacto
function copyEmail(email) {
  navigator.clipboard.writeText(email).then(() => {
    alert(`Correo copiado al portapapeles: ${email}`);
  }).catch(err => {
    console.error('Error al copiar correo:', err);
  });
}

// Conmutador de Imágenes del Campus
function switchCampusImg(src, btnEl) {
  const mainImg = document.getElementById('campus-main-img');
  if (mainImg) {
    mainImg.src = src;
  }
  const parent = btnEl.parentElement;
  if (parent) {
    parent.querySelectorAll('.area-chip').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');
  }
}
