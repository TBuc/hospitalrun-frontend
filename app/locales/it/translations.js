export default {
  admin: {
    address: {
      address1Label: "Etichetta dell' indirizzo 1",
      address2Label: "Etichetta dell' indirizzo 2",
      address3Label: "Etichetta dell' indirizzo 3",
      address4Label: "Etichetta dell' indirizzo 4",
      addressLabel: 'Indirizzo',
      editTitle: 'Opzioni indirizzo',
      include1Label: '',
      include2Label: '',
      include3Label: '',
      include4Label: '',
      messages: { addressSaved: '' },
      newTitle: 'Opzioni Indirizzo',
      titles: { optionsSaved: 'Opzioni Salvate' }
    },
    addressOptions: '',
    customForms: {
      buttons: {
        addField: '',
        moveDown: '',
        moveUp: '',
        newForm: '',
        preview: ''
      },
      labels: {
        alwaysInclude: '',
        checkbox: '',
        colSpan: '',
        columns: '',
        customForm: '',
        dischargeReportFormType: '',
        expenseTo: '',
        formName: '',
        formType: '',
        incidentFormType: '',
        includeOtherOption: '',
        labFormType: '',
        label: '',
        newForm: '',
        opdReportFormType: '',
        operativePlanFormType: '',
        otherOptionLabel: '',
        patientFormType: '',
        property: '',
        radio: '',
        select: '',
        socialworkFormType: '',
        text: '',
        textarea: '',
        visitFormType: ''
      },
      messages: { formSaved: '' },
      titles: {
        checkboxValues: '',
        customForms: '',
        deleteForm: '',
        dropDownValues: '',
        editCustomForm: '',
        fields: 'Campi',
        formSaved: '',
        newCustomForm: '',
        radioValues: ''
      }
    },
    header: {
      editTitle: 'Opzioni Intestazione',
      facilityName: 'Nome Struttura',
      headerLabel: 'Intestazione',
      headerLine1: 'Linea di Intestazione 1',
      headerLine2: 'Linea di Intestazione 2',
      headerLine3: 'Linea di Intestazione 3',
      logoURL: 'URL del Logo',
      messages: { headerSaved: 'Le opzioni dell\'intestazione sono state salvate' },
      newTitle: 'Opzioni Intestazione',
      titles: { optionsSaved: 'Opzioni Salvate' }
    },
    loadDb: 'Carica DB',
    loaddb: {
      displayAlertMessage: 'Seleziona il file che vuoi caricare.',
      displayAlertTitle: 'Seleziona File Da Caricare',
      editTitle: 'Carica DB',
      errorDisplayAlertMessage: 'Non è stato possibile importare il database. L\'errore è stato: {{error}}',
      errorDisplayAlertTitle: 'Errore durante il Caricamento',
      progressMessage: 'Attendi mentre il tuo database viene caricato.',
      progressTitle: 'Caricando il Database'
    },
    lookup: {
      aisleLocationList: '',
      alertImportListMessage: '',
      alertImportListSaveMessage: '',
      alertImportListSaveTitle: '',
      alertImportListTitle: '',
      alertImportListUpdateMessage: '',
      alertImportListUpdateTitle: '',
      anesthesiaTypes: '',
      anesthesiologists: '',
      billingCategories: '',
      clinicList: '',
      countryList: '',
      cptCodeList: '',
      diagnosisList: '',
      edit: { template: {
        addTitle: 'Aggiungi Valore',
        editTitle: 'Modifica Valore',
        labelTitle: 'Valore',
        updateButtonTextAdd: 'Aggiungi',
        updateButtonTextUpdate: 'TODOUpdate'
      } },
      expenseAccountList: '',
      imagingPricingTypes: 'Listini Radiologia',	// TODO "listini"?!
      incidentDepartments: '',
      inventoryTypes: '',
      labPricingTypes: 'Listini Esami di Laboratorio',	// TODO "listini"?!
      pageTitle: '',
      patientStatusList: 'Elenco Stato Pazienti',
      physicianList: 'Medici',
      procedureList: 'Procedure',
      procedureLocations: '',
      procedurePricingTypes: 'Listini Procedure',	// TODO "listini"?!
      radiologists: 'Radiologi',
      titles: { deleteLookupValue: 'Cancella Valore' },
      unitTypes: 'Tipi di Unità',
      vendorList: 'Fornitore',
      visitLocationList: '',
      visitTypes: 'Tipi di visita',
      wardPricingTypes: '',
      warehouseList: ''
    },
    lookupLists: '',
    roles: {
      capability: {
        addAllergy: 'Aggiungere Allergia',
        addAppointment: 'Aggiungere Appuntamento',
        addBillingDiagnosis: '',
        addCharge: 'Aggiungere Addebito di Spesa',
        addDiagnosis: 'Aggiungere Diagnosi',
        addImaging: 'Aggiungere Esame Radiologico',
        addIncident: '',
        addIncidentCategory: '',
        addInventoryItem: 'Aggiungere Articolo Inventariale',
        addInventoryPurchase: 'Aggiungere Acquisto Inventariale',
        addInventoryRequest: '',
        addInvoice: 'Aggiungere Fattura',
        addLab: 'Aggiungere Esame di Laboratorio',
        addMedication: '',
        addNote: '',
        addOperationReport: '',
        addOperativePlan: '',
        addPatient: 'Aggiungere Paziente',
        addPayment: 'Aggiungere Pagamento',
        addPhoto: 'Aggiungere Fotografia',
        addPricing: 'Aggiungi Prezzo',
        addPricingProfile: 'Aggiungi Listino',
        addProcedure: '',
        addSocialwork: '',
        addVisit: 'Aggiungere Visita',
        addVitals: 'Aggiungere Segni Vitali',
        adjustInventoryLocation: '',
        admin: 'Amministrare HospitalRun',
        admitPatient: '',
        appointments: 'Appuntamenti',
        billing: 'Fatturazione',
        cashier: '',
        completeImaging: '',
        completeLab: '',
        defineUserRoles: 'Definire Ruoli Utenti',
        deleteAppointment: 'Cancellare Appuntamenti',
        deleteDiagnosis: 'Cancellare Diagnosi',
        deleteImaging: 'Cancellare Esame Radiologico',
        deleteIncident: '',
        deleteIncidentCategory: '',
        deleteInventoryItem: 'Cancellare Articolo Inventariale',
        deleteInvoice: 'Cancellare Fattura',
        deleteLab: 'Cancellare Esame di Laboratorio',
        deleteMedication: '',
        deleteNote: '',
        deletePatient: 'Cancellare Paziente',
        deletePhoto: 'Cancellare Fotografia',
        deletePricing: 'Cancella Prezzo',
        deletePricingProfile: 'Cancella Listino',
        deleteProcedure: 'Cancellare Procedura',
        deleteSocialwork: '',
        deleteVisit: 'Cancellare Visita',
        deleteVitals: 'Cancellare Segni Vitali',
        dischargePatient: '',
        editInvoice: 'Modificare Fattura',
        fulfillInventory: '',
        fulfillMedication: '',
        generateIncidentReport: '',
        imaging: 'Diagnostica Per Immagini',
        incident: '',
        inventory: 'Inventario',
        invoices: 'Fatture',
        labs: 'Esami di Laboratorio',
        listPaidInvoices: '',
        loadDb: 'Caricare Database',
        manageIncidents: '',
        medication: '',
        overrideInvoice: 'Sovrascrivere Fattura',
        patientReports: '',
        patients: 'Pazienti',
        pricing: '',
        updateConfig: 'Modificare Configurazioni',
        visits: 'Visite'
      },
      messages: { roleSaved: 'Il ruolo {{roleName}} è stato salvato.' },
      titles: { roleSaved: 'Ruolo Salvato' }
    },
    textReplacements: {
      createNew: 'Crea una nuova Abbreviazione',
      existingRepl: 'Abbreviazione esistente',
      noMatches: '',
      pageTitle: 'Abbreviazioni',
      performExpand: "Premi Invio per sostituire #{{from}} con '{{to}}'",
      possibleExpansions: 'Possibili sostituti: {{possible}}',
      replDesc: 'Quando stai scrivendo, queste Abbreviazioni ti consentono di sostituire una corta sequenza di caratteri con una frase più lunga.',
      replaceWith: 'Sostituisci con',
      toReplace: 'Testo da sostituire'
    },
    userRoles: 'Ruoli Utenti',
    users: 'Utenti',
    visitForms: {
      labels: {
        followup: '',
        form: '',
        initial: '',
        visitType: ''
      },
      titles: { visitForms: '' }
    },
    workflow: {
      admissionDepositLabel: '',
      clinicPrepaymentLabel: '',
      editTitle: '',
      followupPrepaymentLabel: '',
      messages: { optionsSaved: '' },
      newTitle: '',
      outpatientImagingLabel: '',
      outpatientLabLabel: '',
      outpatientMedicationLabel: '',
      titles: { optionsSaved: '' },
      workflowLabel: ''
    }
  },
  alerts: {
    errorExclamation: 'Errore!!!!',
    pleaseWait: 'Attendere, prego',
    reportError: '',
    warningExclamation: 'Attenzione!!!!'
  },
  allergies: {
    buttons: { addAllergy: 'Aggiungi Allergia' },
    labels: {
      allergyName: 'Nome',
      patientAllergy: 'Allergie del paziente'
    },
    titles: {
      addAllergy: 'Aggiungi allergia',
      editAllergy: 'Modifica allergia'
    }
  },
  application: {
    messages: { sessionExpired: 'La tua sessione è scaduta. Riaccedi per continuare.' },
    titles: { sessionExpired: 'Sessione Scaduta' }
  },
  appointments: {
    buttons: {
      newButton: '+ nuovo appuntamento',
      scheduleSurgery: '+ pianifica intervento'
    },
    calendarTitle: 'Calendario Appuntamenti',
    currentScreenTitle: 'Elenco Appuntamenti',
    editTitle: 'Modifica Appuntamento',
    labels: {
      noLocation: '',
      selectedStartingDate: ''
    },
    messages: {
      appointmentSaved: 'L\'appuntamento per il paziente {{patient}} è stato salvato.',
      endTimeLaterThanStart: 'Seleziona un\'ora di fine successiva all\'ora di inizio'
    },
    missed: '',
    newTitle: 'Nuovo Appuntamento',
    searchTitle: 'Cerca Appuntamenti',
    sectionTitle: 'Appuntamenti',
    thisWeek: 'Appuntamenti Questa Settimana',
    titles: {
      appointmentSaved: 'Appuntamenti Salvati',
      editSurgicalAppointment: 'Modifica Appuntamento Chirurgico',
      newSurgicalAppointment: 'Nuovo Appuntamento Chirurgico',
      theaterSchedule: ''
    },
    todayTitle: 'Appuntamenti Odierni'
  },
  billing: {
    alerts: {
      noInvoiceFound: 'Nessuna fattura trovata.',
      noPricingItems: 'Nessun prezzo trovato.',
      noPricingProfiles: 'Nessun listino trovato.'
    },
    buttons: {
      addOverride: '',
      createInvoice: 'Creare una fattura?'
    },
    labels: {
      actualCharges: '',
      discountAmount: 'Sconto assoluto',
      discountPercentage: 'Sconto percentuale',
      externalInvoiceNumber: 'Fattura Esterna #',
      hmoCom: '',
      insurance: 'Assicurazione Nazionale',
      paymentProfile: '',
      paymentsDeposits: '',
      pricingPanelOverrides: '',
      pricingProfile: 'Listino',
      setFee: ''
    },
    messages: {
      flatDiscountMsg: '',
      flatFeeMsg: ''
    }
  },
  buttons: {
    add: 'Aggiungi',
    addItem: 'Aggiungi Elemento',
    addLineItem: '',
    addValue: 'Aggiungi Valore',
    addVisit: '',
    allRequests: 'Tutte le richieste',
    barcode: 'Codice a barre',
    cancel: 'Annulla',
    clear: '',
    close: 'Chiudi',
    complete: '',
    'delete': 'Cancella',
    dispense: '',
    edit: 'Modifica',
    filter: 'TODOFiltra',
    fulfill: 'Compila',
    'import': 'Importa',
    loadFile: 'Carica File',
    newItem: '+ nuovo elemento',
    newNote: 'Nuova nota',
    newRequest: 'Nuova richiesta',
    newRequestPlus: '+ nuova richiesta',
    newUser: 'Nuovo Utente',
    ok: 'Ok',
    remove: 'Rimuovi',
    returnButton: 'TODOReturn',
    search: 'Cerca',
    showAll: 'Mostra Tutto',
    showFewer: 'Mostra meno',
    update: 'TODOUpdate'
  },
  components: {
    chargesByTypeTab: { charges: '' },
    customFormManager: { buttons: { addForm: '' } },
    dateTimePicker: {
      amHour: '{{hour}} AM',
      midnight: 'Mezzanotte',
      noon: 'Mezzogiorno',
      pmHour: '{{hour}} PM'
    },
    imageUpload: { messages: { selectValidImageFile: '' } },
    operativeProcedures: {
      buttons: { addProcedure: '' },
      labels: { procedure: '' },
      titles: { procedures: '' }
    },
    patientOrders: {
      buttons: {
        newImaging: 'Nuova Radiologia',
        newLab: 'Nuovo Esame di Laboratorio',
        newMedication: 'Nuovo Farmaco'		// TODO Farmaco o Medicazione?
      },
      labels: {
        imagingOrderType: '',
        labOrderType: '',
        medicationOrderType: '',
        orderType: ''
      }
    },
    priceList: { charges: '' },
    quantityCalc: { result: '' },
    quantityConv: {
      conversion: '',
      unit: ''
    },
    sortableColumn: { labels: { selectAll: '' } },
    takePhoto: {
      camera: 'Fotocamera',
      how: 'Come vuoi aggiungere la foto?',
      labels: {
        takeAPicture: 'Scatta una Foto',
        uploadAFile: 'Carica un File'
      },
      photo: 'Foto',
      preview: 'Anteprima',
      takePhoto: 'Scatta Foto',
      uploadFile: 'Carica File'
    },
    upcomingAppointments: {
      labels: {
        date: 'Data',
        location: 'Luogo',
        type: 'Tipo',
        'with': 'Con'
      },
      titles: { upcomingAppointments: 'Prossimi Appuntamenti' }
    }
  },
  customForms: {
    buttons: { addForm: 'Aggiungi Modulo' },
    labels: { formToAdd: 'Modulo da Aggiungere' },
    titles: { addCustomForm: 'Aggiungi Modulo Personalizzato' }
  },
  dashboard: {
    needs_user_setup: 'Ti raccomandiamo di creare un account di tipo Utente',
    standalone_welcome: '<h4>Grazie per aver scaricato HospitalRun</h4><p>Stai usando HospitalRun in modalità autonoma. Questa modalità ti consente di supportare più utenti su una singola istanza PC fisso/portatile di HospitalRun. Questo è ideale per:</p><ul><li>Valutare HospitalRun per eventualmente poi procedere con la sua installazione su di un server.</li><li>Using the platform to support a clinic / facility where a single instance is sufficient.</li></ul><p>If you\'re considering a multi-device deployment of HospitalRun, we\'re <a href=\"https://github.com/HospitalRun/hospitalrun-frontend/issues/1048\" target=\"_blank\">working on features</a> that will allow you to \"graduate\" from this single instance into a traditional cloud / server-based deployment.</p>',	// TODO partially translated
    title: 'Benvenuto in HospitalRun!'
  },
  dates: {
    'long': '{{years}} anno {{months}} mesi {{days}} giorni',
    longOmitDays: '{{years}} anno {{months}} mesi',
    longOmitDaysPlural: '{{years}} anni {{months}} mesi',
    longOmitDaysYears: '{{months}} mesi',
    longOmitYears: '{{months}} mesi {{days}} giorni',
    longPlural: '{{years}} anni {{months}} mesi {{days}} giorni',
    'short': '{{years}}a {{months}}m {{days}}g',
    shortOmitYears: '{{months}}m {{days}}g'
  },
  diagnosis: {
    labels: {
      activeDiagnosis: '',
      date: 'Data',
      diagnosis: 'Diagnosi',
      secondaryDiagnosis: 'Diagnosi Secondaria'
    },
    titles: {
      addDiagnosis: 'Aggiungi Diagnosi',
      editDiagnosis: 'Modifica Diagnosi'
    }
  },
  errors: {
    accepted: '',
    blank: 'non può essere vuoto',
    confirmation: '',
    empty: 'non può essere vuoto',
    equalTo: '',
    even: 'deve essere pari',
    exclusion: 'è riservato/a',
    greaterThan: 'deve essere maggiore di {{count}}',
    greaterThanOrEqualTo: 'deve essere maggiore o uguale a {{count}}',
    inclusion: 'non è incluso/a nella lista',
    invalid: 'non è valido/a',
    invalidNumber: 'non è un numero valido',
    lessThan: 'deve essere minore di {{count}}',
    lessThanOrEqualTo: 'deve essere minore o uguale a {{count}}',
    notANumber: 'non è un numero',
    notAnInteger: 'deve essere un intero',
    odd: 'deve essere dispari',
    otherThan: 'deve essere diverso da {{count}}',
    present: 'deve essere vuoto',
    result: 'Inserire un risultato prima di completare',
    tooLong: 'è troppo lungo (massimo {{count}} caratteri)',
    tooShort: 'è troppo corto (minimo {{count}} caratteri)',
    wrongLength: 'è della lunghezza sbagliata (dovrebbe essere di {{count}} caratteri)'
  },
  headings: { chargedItems: '' },
  imaging: {
    alerts: {
      completedMessage: '',
      completedTitle: '',
      savedMessage: '',
      savedTitle: ''
    },
    buttons: { newButton: '+ nuovo esame radiologico' },
    labels: {
      addNewVisit: '--Aggiunti Nuova Visita--',
      radiologist: 'Radiologo'
    },
    messages: { noCompleted: '' },
    pageTitle: '',
    sectionTitle: '',
    titles: {
      completedImaging: '',
      editTitle: '',
      newTitle: ''
    }
  },
  incident: {
    buttons: {
      add: 'Aggiungi',
      addForm: 'Aggiungi Modulo',
      addItem: 'Aggiungi Elemento',
      cancel: 'Annulla',
      'delete': 'Cancella',
      download: 'Scarica',
      edit: 'Modifica',
      'export': '',
      generateRep: '',
      newAttachment: '+ Nuovo Allegato',
      newCategory: '+ nuova categoria',
      newIncident: '',
      newNote: ''
    },
    labels: {
      actions: 'Azioni',
      addedBy: '',
      category: 'Categoria',
      categoryItem: '',
      date: 'Data',
      dateRecorded: '',
      department: 'Dipartimento',
      description: '',
      endDate: '',
      givenBy: '',
      howToAddAttachment: '',
      incidentDate: '',
      incidentId: '',
      item: 'Elemento',
      lastUpdated: '',
      note: '',
      patientId: 'Id Paziente',
      patientImpacted: '',
      reportType: '',
      reportedBy: '',
      reportedDate: '',
      reportedTo: '',
      sentinelEvent: '',
      startDate: '',
      status: '',
      statusActive: '',
      statusClosed: '',
      statusFollowup: '',
      statusReported: '',
      title: 'Titolo',
      total: 'Totale',
      updatedBy: ''
    },
    messages: {
      attachmentFileRequired: '',
      createNew: '',
      createNewIncidentCategory: '',
      fillIn: '',
      incidentCategorySaved: '',
      noClosedIncidents: '',
      noIncidentCategoriesFound: '',
      noIncidents: '',
      saved: '',
      selectExistingPatient: ''
    },
    titles: {
      addAttachment: 'Aggiungi Allegato',
      addCategoryItem: '',
      addNote: '',
      attachments: '',
      closed: '',
      current: '',
      deleteAttachment: 'Cancella Allegato',
      deleteIncident: '',
      deleteIncidentCategory: '',
      deleteItem: 'Cancella Elemento',
      deleteNote: '',
      editAttachment: 'Modifica Allegato',
      editIncident: '',
      editIncidentCategory: '',
      editNote: '',
      general: '',
      history: 'Cronologia',
      incidentCategories: '',
      incidentCategoryItem: '',
      incidentCategoryName: '',
      incidentCategorySaved: '',
      incidentSaved: '',
      incidents: '',
      incidentsByCategory: '',
      incidentsByDepartment: '',
      newIncident: '',
      newIncidentCategory: '',
      notes: '',
      reports: ''
    }
  },
  inventory: {
    edit: {
      cost: 'Costo Per Unità:',
      delivered: '',
      location: '',
      prescription: '',
      pulled: '',
      quantity: '',
      reason: '',
      returned: '',
      transferredFrom: '',
      transferredTo: ''
    },
    labels: {
      action: 'Azione',
      add: 'Aggiungi',
      addAdjustmentType: '',
      adjust: '',
      adjustmentDate: '',
      adjustmentFor: '',
      adjustmentType: '',
      aisle: '',
      aisleLocation: '',
      allInventory: '',
      allItems: '',
      availableQuantity: '',
      billTo: '',
      consumePurchases: '',
      consumptionRate: '',
      cost: '',
      costPerUnit: '',
      crossReference: '',
      currentQuantity: '',
      dateCompleted: '',
      dateEffective: '',
      dateEnd: '',
      dateReceived: '',
      dateStart: '',
      dateTransferred: '',
      daysLeft: '',
      deleteItem: '',
      deliveryAisle: '',
      deliveryLocation: '',
      details: '',
      distributionUnit: '',
      editItem: '',
      expense: '',
      expirationDate: '',
      fulfillRequest: '',
      fulfillRequestNow: '',
      gift: '',
      giftInKindNo: '',
      giftInKindYes: '',
      giftUsage: '',
      inventoryConsumed: '',
      inventoryItem: '',
      inventoryObsolence: '',
      invoiceItems: '',
      invoiceLineItem: '',
      invoiceNumber: '',
      item: '',
      itemNumber: '',
      items: '',
      location: '',
      locations: '',
      markAsConsumed: '',
      name: '',
      newItem: '',
      originalQuantity: '',
      print: '',
      printBarcode: '',
      printer: '',
      pullFrom: '',
      purchaseCost: '',
      purchaseInfo: '',
      purchases: '',
      quantity: 'Quantità ({{unit}})',
      quantityAvailable: 'Quantità Disponibile',
      quantityOnHand: '',
      quantityRequested: '',
      rank: '',
      reason: '',
      remove: 'Rimuovi',
      removeAdjustmentType: 'Rimuovi',
      reorderPoint: '',
      requestedItems: '',
      returnAdjustmentType: '',
      returnToVendorAdjustmentType: '',
      salePricePerUnit: '',
      save: 'Salva',
      serialNumber: '',
      total: 'Totale',
      totalCost: 'Costo Totale',
      totalReceived: '',
      transaction: '',
      transactions: '',
      transfer: '',
      transferFrom: '',
      transferTo: '',
      transferToAisle: '',
      unit: 'Unità',
      unitCost: 'Costo Unitario',
      vendor: '',
      vendorItemNumber: '',
      writeOffAdjustmentType: '',
      xref: ''
    },
    messages: {
      adjust: '',
      createRequest: '',
      itemNotFound: '',
      loading: '',
      noItems: '',
      noRequests: '',
      purchaseSaved: '',
      quantity: '',
      removeItem: '',
      removeItemRequest: '',
      requestFulfilled: '',
      requestUpdated: '',
      warning: ''
    },
    reports: {
      adjustment: '',
      daysSupply: '',
      expenseDetail: '',
      expenseSum: '',
      expiration: '',
      'export': '',
      fields: '',
      finance: '',
      generate: '',
      invLocation: '',
      invValuation: '',
      purchaseDetail: '',
      purchaseSum: '',
      reportType: '',
      rows: {
        adjustments: 'Aggiustamenti',
        adjustmentsTotal: '',
        balanceBegin: '',
        balanceEnd: '',
        category: '',
        consumed: '',
        consumedGik: '',
        consumedGikTotal: '',
        consumedPuchases: '',
        consumedPurchasesTotal: '',
        consumedTotal: '',
        errInFinSum: '',
        errInFindPur: '',
        errInFindReq: '',
        expensesFor: '',
        noAccount: '',
        subtotal: '',
        subtotalFor: '',
        total: '',
        totalFor: '',
        totalPurchases: '',
        transfer1: '',
        trasnfer2: ''
      },
      stockTransferDetail: '',
      stockTransferSum: '',
      stockUsageDetail: '',
      stockUsageSum: '',
      titleDateRange: '',
      titleSingleDate: ''
    },
    titles: {
      addPurchase: 'Aggiungi Acquisto',
      addRequest: 'Nuova Richiesta',
      adjustment: '',
      editPurchase: 'Modifica Acquisto',
      editRequest: 'Modifica Richiesta',
      inventoryItem: 'Nuovo Elemento Inventariale',
      inventoryReport: 'Resoconto Inventariale',
      purchaseSaved: '',
      quickAddTitle: '',
      removeItem: 'Rimuovi Elemento',
      requestFulfilled: '',
      requestUpdated: 'Richiesta Aggiornata',
      transfer: '',
      warning: 'Attenzione!!!!!'
    }
  },
  labels: {
    action: 'Azione',
    actions: 'Azioni',
    addNewOutpatientVisit: '--Aggiungi Nuova Visita Ambulatoriale--',
    address: 'Indirizzo',
    age: 'Età',
    allDay: 'Tutto il giorno',
    amount: 'Quantità',
    anesthesia: 'Anestesia',
    assisting: '',
    balanceDue: '',
    billDate: '',
    billTo: '',
    category: 'Categoria',
    completed: 'Fatto',	// Fatto, evaso, completato
    country: 'Paese',
    cptcode: '',
    creditTo: '',
    currencySymbol: '$',
    date: 'Data',
    dateCompleted: '',
    dateOfBirth: 'Data di Nascita',
    dateOfBirthShort: 'DDN',
    datePaid: '',
    dateRequested: '',
    'delete': '',
    deleteRequest: '',
    deleteUser: '',
    department: '',
    description: 'Descrizione',
    discount: 'Sconto',
    displayName: 'Nome Visualizzato',
    docRead: '',
    docWritten: '',
    edit: 'Modifica',
    editUser: 'Modifica Utente',
    email: 'Email',
    endDate: 'Data di fine',
    endTime: 'Data di inizio',
    excess: '',
    expenseTo: '',
    fileLoadSuccessful: '',
    fileName: 'Nome del File',
    fileToLoad: '',
    from: '',
    fulfill: '',
    fulfillRequest: '',
    fulfillRequestNow: '',
    fulfilled: '',
    grandTotal: '',
    id: 'Id',
    imageOrders: '',
    imagingType: 'Tipo di Esame Radiologico',
    importFile: '',
    invoiceId: '',
    labOrders: '',
    lineItems: '',
    loading: 'Caricamento in corso',
    location: '',
    lookupType: '',
    medication: '',
    name: 'Nome',
    newUser: 'Nuovo Utente',
    note: 'Nota',
    notes: 'Note',
    number: 'Numero',
    on: '',
    password: 'Password',
    patient: 'Paziente',
    payments: 'Pagamenti',
    physician: 'Medico',
    prescriber: 'Prescrivente',
    prescription: 'Prescrizione',
    prescriptionDate: 'Data Prescrizione',
    price: 'Prezzo',
    print: 'Stampa',
    procedures: '',
    provider: 'Fornitore',
    pullFrom: '',
    quantity: 'Quantità',
    remarks: '',
    requestedBy: 'Richiesto Da',
    requestedOn: 'Richiesto Il',
    requests: 'Richieste',
    result: 'Risultato',
    results: 'Risultati',
    role: 'Ruolo',
    search: '',
    sex: 'Sesso',
    startDate: 'Data Inizio',
    startTime: 'Ora Inizio',
    status: 'Stato',
    takenBy: 'TODO-Preso da',
    to: 'A',
    total: 'Totale',
    type: 'Tipo',
    userCanAddNewValue: 'L\'Utente Può Aggiungere Nuovi Valori',
    username: 'Nome utente',
    value: 'Valore',
    view: 'TODO-View',
    visit: 'TODO-VisitaVisitare',	// TODO Visita o Visitare?
    'with': 'Con'
  },
  labs: {
    alerts: {
      requestCompletedMessage: 'La richiesta di esame di laboratorio è stata evasa.',
      requestCompletedTitle: 'Richiesta di esame di laboratorio evasa.',
      requestSavedMessage: 'La richiesta di esame di laboratorio è stata salvata.',
      requestSavedTitle: 'Richiesta di esame di laboratorio salvata.'
    },
    buttons: { newButton: '+ nuovo esame di laboratorio' },
    completedTitle: 'Esami di Laboratorio Completati',
    deleteTitle: 'Cancella Richiesta',
    editTitle: 'Modifica Richiesta di Esame di Laboratorio',
    labels: {
      addNewVisit: '--Aggiungi Nuova Visita--',
      labType: 'Tipo di Esame di Laboratorio'
    },
    messages: {
      createNewRecord: '',
      noCompleted: 'Nessun esame evaso trovato.',	// TODO check
      noItemsFound: 'Nessun Esame di Laboratorio trovato.'
    },
    newTitle: 'Nuova Richiesta di Esame di Laboratorio',
    requestsTitle: 'Richieste di Esami di Laboratorio',
    sectionTitle: 'Esami di Laboratorio'
  },
  loading: {
    messages: {
      '0': 'TODO-Msg0',
      '1': 'TODO-Msg1',
      '2': 'TODO-Msg2',
      '3': 'TODO-Msg3',
      '4': 'TODO-Msg4',
      '5': 'TODO-Msg5',
      '6': 'TODO-Msg6',
      '7': 'TODO-Msg7',
      '8': 'TODO-Msg8',
      '9': 'TODO-Msg9',
      '10': 'TODO-Msg10',
      '11': 'TODO-Msg11'
    },
    progressBar: { progress: '{{progressBarValue}}% Completato' }
  },
  login: {
    labels: {
      password: 'Password',
      signIn: 'Entra',
      username: 'Nome Utente'
    },
    messages: {
      error: 'Nome Utente o Password errati.',
      signIn: 'accedi'
    }
  },
  medication: {
    alerts: {
      fulfilledTitle: '',
      returnedMessage: '',
      returnedTitle: '',
      savedMessage: '',
      savedTitle: ''
    },
    buttons: {
      dispenseMedication: '',
      newButton: '',
      returnMedication: ''
    },
    labels: {
      adjustmentDate: '',
      creditToAccount: '',
      quantityDispensed: '',
      quantityDistributed: '',
      quantityRequested: '',
      quantityToReturn: '',
      refills: '',
      returnAisle: '',
      returnLocation: '',
      returnReason: ''
    },
    messages: { createNew: '' },
    pageTitle: '',
    returnMedication: '',
    sectionTitle: '',
    titles: {
      completedMedication: '',
      editMedicationRequest: '',
      newMedicationRequest: ''
    }
  },
  messages: {
    createNewRecord: 'Creare una nuova voce?',
    createNewUser: 'Creare un nuovo utente?',
    'delete': 'Sei sicuro/a di voler cancellare {{name}}?',
    delete_plural: 'Sei sicuro/a di voler cancellare questi/e {{name}}?',
    delete_singular: 'Sei sicuro/a di voler cancellare questo/a {{name}}?',
    forAuthorizedPersons: 'Questo Rapporto è solamente per persone autorizzate.',
    newPatientHasToBeCreated: 'Deve essere creato un nuovo paziente...Attendere prego..',
    noHistoryAvailable: 'Nessuna cronologia disponibile.',
    noItemsFound: 'Nessun elemento trovato.',
    noNotesAvailable: 'Non vi sono ulteriori note cliniche disponibili per questa visita.',
    noUsersFound: 'Nessun utente trovato.',
    onBehalfOf: 'per conto di',
    reportError: 'Si è verificato un errore durante la generazione del resoconto richiesto. Gentilmente fai sapere al tuo amministratore di sistema che si è verificato un errore.',
    requiredFieldsCorrectErrors: 'Compila i campi obbligatori (indicati con *) e correggi gli errori prima di proseguire.',
    saveActionException: 'Si è verificato un errore tentando di salvare: {{message}}',
    sorry: 'Ci dispiace, qualcosa è andato storto...',
    userHasBeenSaved: 'L\'utente è stato salvato.',
    userSaved: 'Utente Salvato'
  },
  models: {
    appointment: {
      labels: {
        allDay: 'Tutto il giorno',
        appointmentDate: 'Data',
        appointmentType: 'Tipo',
        endDate: 'Data fine',
        location: 'Luogo',
        notes: 'Note',
        patient: 'Paziente',
        provider: 'Con',
        startDate: '',
        status: 'Stato',
        type: 'Tipo'
      },
      names: {
        plural: 'appuntamenti',
        singular: 'appuntamento'
      }
    },
    attachment: { names: {
      plural: 'allegati',
      singular: 'allegato'
    } },
    form: { names: {
      plural: 'moduli',
      singular: 'modulo'
    } },
    imaging: {
      names: 'diagnostica per immagini',
      request: {
        plural: 'richieste di esami radiologici',
        singular: 'richiesta di esame radiologico'
      }
    },
    incident: { names: {
      plural: 'TODO-Incidenti',
      singular: 'TODO-Incidente'
    } },
    item: { names: {
      plural: 'elementi',
      singular: 'elemento'
    } },
    lab: {
      names: {
        plural: 'esami di laboratorio',
        singular: 'esame di laboratorio'
      },
      request: {
        plural: 'richieste di esami di laboratorio',
        singular: 'richiesta di esame di laboratorio'
      }
    },
    medication: {
      names: {
        plural: 'farmaci',
        singular: 'farmaco'
      },
      request: {
        plural: 'richieste di farmaci',
        singular: 'richiesta di farmaco'
      }
    },
    note: { names: {
      plural: 'note',
      singular: 'nota'
    } },
    patient: {
      labels: { name: 'Nome' },
      names: { singular: 'Paziente' }
    },
    procedure: { names: {
      plural: 'TODO-Procedure',
      singular: 'TODO-Procedura'
    } },
    user: { names: {
      plural: 'Utenti',
      singular: 'Utente'
    } },
    visit: { names: {
      plural: 'visite',
      singular: 'visita'
    } },
    vital: { names: {
      plural: 'Segni Vitali',
      singular: 'Segno Vitale'
    } }
  },
  navigation: {
    about: 'Informazioni su HospitalRun',
    actions: {
      login: 'Accedi',
      logout: 'Esci'
    },
    administration: 'Amministrazione',
    billing: 'Fatturazione',
    imaging: 'Diagnostica per immagini',
    incident: 'Incident',	// TODO
    inventory: 'Inventario',
    labs: 'Esami di laboratorio',
    medication: 'TODO-Medication',	// TOCHECK Farmaci/Terapia basing on context
    patients: 'Pazienti',
    scheduling: 'Programmazione',
    subnav: {
      actions: 'Azioni',
      addAppointment: 'Aggiungi Appuntamento',
      addressFields: 'Campi Indirizzo',
      admittedPatients: 'Pazienti Ricoverati',
      appointmentSearch: 'TODO-Cerca Appuntamento',
      appointmentsCalendar: 'Calendario degli Appuntamenti',
      appointmentsThisWeek: 'Appuntamenti Questa Settimana',
      cashier: 'Cassiere',
      completed: 'Evasi',
      currentIncidents: '',
      customForms: 'Moduli Personalizzati',
      dispense: '',
      history: 'TODO-Cronologia',
      incidentCategories: '',
      inventoryReceived: 'Ricevute Scorte',
      invoices: 'Fatture',
      items: 'Elementi',
      loadDB: 'Carica DB',
      lookupLists: '',
      newIncident: 'TODO-Nuovo Incidente',
      newInvoice: 'Nuova Fattura',
      newPatient: 'Nuovo Paziente',
      newRequest: 'Nuova Richiesta',
      newUser: 'Nuovo Utente',
      outpatient: 'Paziente Ambulatoriale',
      patientListing: '',
      priceProfiles: 'Listini',
      prices: 'Prezzi',
      printHeader: 'TODO-Intestazione di Stampa (oppure "Stampa Intestazione"?)',
      reports: 'Resoconti',
      requests: 'Richiesti',
      returnMedication: '',
      scheduleSurgery: 'Pianifica Intervento',
      textReplacements: 'Abbreviazioni',
      theaterSchedule: '',
      "today'sAppointments": 'Appuntamenti Odierni',
      userRoles: 'Ruoli Utente',
      users: 'Utenti',
      workflow: 'Flusso di Lavoro'
    }
  },
  operationReport: {
    labels: {
      additionalNotes: 'Note Aggiuntive',
      assistant: 'Assistente',
      caseComplexity: 'Complessità del Caso',
      operationDescription: 'Descrizione dell\'Intervento',
      preOpPrimaryDiagnosis: 'Diagnosi Primaria Pre-Intervento',
      preOpSecondaryDiagnosis: 'Diagnosi Secondaria Pre-Intervento',
      surgeon: 'Chirurgo',
      surgeryDate: 'Data Intervento'
    },
    messages: { reportSaved: 'Il Referto dell\'intervento è stato salvato.' },
    titles: {
      editTitle: 'Modifica Referto d\'Intervento',
      newTitle: 'Nuovo Referto d\'Intervento',
      reportSaved: 'Referto Salvato'
    }
  },	
  operativePlan: {
    buttons: { completePlan: '' },
    labels: {
      additionalNotes: 'Note Aggiuntive',
      admissionInstructions: '',
      caseComplexity: 'Complessità del Caso',
      completedStatus: 'Eseguito',
      droppedStatus: 'Saltato',
      operationDescription: 'Descrizione dell\'Intervento',
      plannedStatus: 'Pianificato',
      status: 'Stato',
      surgeon: 'Chirurgo'
    },
    messages: {
      planCompleted: '',
      planSaved: ''
    },
    titles: {
      editTitle: '',
      newTitle: '',
      planCompleted: '',
      planSaved: ''
    }
  },
  patients: {
    buttons: {
      addContact: 'Aggiungi Contatto',
      addExpense: 'Aggiungi Spesa',
      addFamilyMember: 'Aggiungi Familiare',
      addOperativePlan: '',
      backToPatients: 'Ritorna all\'Elenco dei Pazienti',
      download: 'Scarica',
      editOperativePlan: '',
      newAppointment: 'Nuovo Appuntamento',
      newImaging: 'Nuovo Esame Radiologico',
      newLab: 'Nuovo Esame di Laboratorio',
      newMedication: 'Nuova Medicazione',
      newPatient: 'Nuovo Paziente',
      newPhoto: 'Nuova Foto',
      newVisit: '',
      patientCheckIn: '',
      scheduleSurgery: 'Pianifica Chirurgia'
    },
    labels: {
      admissionDate: 'Data di ricovero',
      admit: 'Ricovera',
      bloodType: 'Gruppo sanguigno',
      caption: 'Intestazione',
      civilStatus: 'Stato civile',
      clinic: '',
      contacts: 'Contatti',
      cost: 'Costo',
      dateOfBirth: 'Data di nascita',
      dateProcessed: '',
      dischargeDate: '',
      dob: 'DDN',
      education: 'Grado di istruzione',
      email: 'Email',
      externalPatientId: 'Id esterno del paziente',
      firstName: 'Nome',
      income: 'Reddito',
      insurance: 'Assicurazione',
      lastName: 'Cognome',
      middleName: 'Secondo nome',
      monthlyCost: 'Costo mensile',
      occupation: 'Occupazione',
      operativePlan: 'Piano operativo',
      parent: 'Genitore/Tutore',
      patientDays: '',
      patientType: 'Tipo di paziente',
      patientTypeCharity: 'Associazione benefica',
      patientTypePrivate: 'Privato',
      phone: 'Telefono',
      placeOfBirth: 'Luogo di nascita',
      primaryDiagnosis: 'Diagnosi primaria',
      referredBy: '',
      referredDate: '',
      relationship: '',
      relationships: '',
      religion: 'Religione',
      secondaryDiagnosis: 'Diagnosi Secondaria',
      sex: 'Sesso',
      sexNotEntered: 'Sesso non indicato',
      sources: '',
      status: 'Condizioni del Paziente',
      totalMontlyExpense: 'Spese Mensili Totali'
    },
    messages: {
      areYouSureDelete: 'Confermi di voler cancellare questo/a {{object}}?',
      createNewPatient: '',
      deletingPatient: '',
      noPatientsFound: 'Nessun paziente trovato.',
      notFoundQuickAdd: '',
      photoFileRequired: 'Scatta una foto oppure carica un file prima di salvare questa foto.',
      savedPatient: ''
    },
    navigation: {
      appointments: 'Appuntamenti',
      general: 'Generale',
      history: 'Cronologia',
      imaging: 'Diagnostica Per Immagini',
      labs: 'Esami di Laboratorio',
      medication: 'Farmaci',
      photos: 'Fotografie',
      socialWork: 'Social Work',	// TODO
      visits: 'Visite'
    },
    notes: {
      newNote: '',
      onBehalfOfCopy: 'per conto di',
      onBehalfOfLabel: 'Per Conto Di',
      pleaseSelectAVisit: '',
      updateNote: ''
    },
    titles: {
      addContact: 'Aggiungi contatto',
      addPhoto: 'Aggiungi fotografia',
      additionalContacts: 'Altri contatti',
      admissionsDetail: 'Dettaglio dei ricoveri',
      admissionsSummary: 'Riepilogo dei ricoveri',
      admittedPatients: 'Pazienti ricoverati',
      'delete': 'Cancella Paziente',
      deleteContact: 'Cancella Contatto',
      deleteExpense: 'Cancella Spesa',
      deleteFamilyMember: 'Cancella Familiare',
      deletePatientRecord: '',
      deletePhoto: 'Cancella Foto',
      diagnosticTesting: '',
      dischargesDetail: '',
      dischargesSummary: '',
      edit: 'Modifica Paziente',
      editPhoto: 'Modifica Foto',
      expenses: 'Spese',
      familyInfo: '',
      familyInformation: '',
      'new': 'Nuovo Paziente',
      outpatientsForDate: 'Pazienti Ambulatoriali del {{visitDate}}',
      patient: '',
      patientListing: '',
      patientReport: '',
      patientStatus: '',
      proceduresDetail: '',
      proceduresSummary: '',
      savedPatient: '',
      socialWork: '',
      todaysOutpatients: 'Pazienti Ambulatoriali Odierni',
      totalPatientDays: '',
      totalPatientDaysDetailed: '',
      visit: ''
    }
  },
  pricing: { labels: {
    discountAmount: 'Ammontare Sconto',
    discountPercentage: 'Percentuale di Sconto',
    setFee: ''
  } },
  print: { invoice: {
    labels: {
      billedBy: 'Emessa da:',
      billedDate: 'Data fattura:',
      dateAdmitted: 'RICOVERO:',
      dateDischarged: 'DIMISSIONE:',
      dischargeNotes: 'Note di Dimissione:',
      patientAddress: 'INDIRIZZO:',
      patientAge: 'ETA\':',
      patientId: 'PAZIENTE #:',
      patientName: 'NOME PAZIENTE:',
      remarks: 'Osservazioni:',
      spacer: '__________________________________________'
    },
    messages: { whereConducted: '' },
    titles: {
      billingStatement: '',
      patientMember: '',
      patients: '',
      relContact: ''
    }
  } },
  procedures: {
    buttons: { addMedication: '' },
    labels: { medicationUsed: '' },
    messages: { saved: '' },
    titles: {
      addChargeItem: '',
      addMedicationUsed: '',
      deleteChargeItem: '',
      deleteMedicationUsed: '',
      edit: '',
      editChargeItem: '',
      editMedicationUsed: '',
      medicationUsed: '',
      'new': '',
      saved: ''
    }
  },
  reports: {
    labels: {
      admissionDate: 'Data Ricovero',
      allProcedures: '',
      completedBy: '',
      dischargeDate: 'Data Dimissione',
      examiner: '',
      images: 'Diagnostica per Immagini',
      labs: 'Esami di Laboratorio',
      location: 'Luogo della Visita',
      medications: '',
      nextAppointment: 'Prossimo Appuntamento',
      nextAppointments: 'Prossimi Appuntamenti',
      notes: {
        author: 'Autore',
        date: 'Data',
        title: 'Note'
      },
      operativePlan: {
        description: 'Descrizione dell\'Intervento',
        instructions: 'Istruzioni al Ricovero',
        procedures: '',
        title: ''
      },
      primaryDiagnosis: 'Diagnosi Principale',
      procedures: '',
      secondaryDiagnosis: 'Diagnosi Secondaria',
      visitDate: 'Data della Visita',
      visitType: 'Tipo di Visita'
    },
    messages: {
      'delete': 'Sei sicuro/a di voler cancellare questo resoconto?',
      saved: 'Il resoconto è stato salvato.'
    },
    titles: {
      dischargeReport: '',
      newDischargeReport: '',
      newOPDReport: '',
      opdReport: '',
      saved: ''
    }
  },
  user: {
    plusNewUser: '+ nuovo utente',
    usersPageTile: ''	// May both be the whole list or a list item [https://www.collinsdictionary.com/dictionary/english/listing]
  },
  visits: {
    buttons: {
      addDiagnosis: 'Aggiungi Diagnosi',
      checkIn: '',
      checkOut: '',
      discharge: '',
      newAppointment: 'Nuovo Appuntamento',
      newDischargeReport: '',
      newOPDReport: '',
      newProcedure: '',
      newVitals: ''
    },
    labels: {
      appointment: 'Appuntamento',
      authoredBy: '',
      checkInTime: '',
      checkOutTime: '',
      createNewPatient: 'Crea Nuovo Paziente',
      diagnosis: 'Diagnosi',
      examiner: 'Esaminatore',
      finalDiagnosis: '',
      haveAppointment: 'S',
      haveDoneOrders: 'S',
      noAppointment: 'N',
      ordersDone: 'Ordini Effettuati',
      ordersNotDone: 'N',
      patientToCheckIn: '',
      procedure: '',
      procedureDate: '',
      reasonForVisit: 'Motivo della Visita',
      reportType: '',
      status: '',
      statusAdmitted: '',
      statusCheckedIn: '',
      statusCheckedOut: '',
      statusDischarged: '',
      visitDate: 'Data della Visita',
      visitInformation: 'Informazioni sulla Visita',
      visitType: 'Tipo di Visita'
    },
    messages: {
      checkOut: '',
      checkedOut: '',
      discharged: '',
      patientCheckedIn: '',
      patientCreatedAndCheckedIn: '',
      visitAndPatientSaved: '',
      visitSaved: ''
    },
    navigation: {
      charges: 'Addebiti',
      notes: 'Note',
      orders: 'Ordini',
      procedures: 'Procedure',
      reports: 'Resoconti',
      vitals: 'Segni vitali'
    },
    titles: {
      additionalDiagnoses: '',
      checkOut: '',
      checkedIn: '',
      checkedOut: '',
      discharged: '',
      editVisit: 'Modifica Visita',
      newVisit: 'Nuova Visita',
      patientCheckIn: '',
      visitSaved: 'Visita Salvata'
    }
  },
  vitals: { labels: {
    dateRecorded: '',
    dbp: 'Pressione Diastolica',
    heartRate: 'Frequenza Cardiaca',
    height: 'Altezza',
    respiratoryRate: 'Frequenza Respiratoria',
    sbp: 'Pressione Sistolica',
    temperature: 'Temperatura',
    weight: 'Peso'
  } }
};