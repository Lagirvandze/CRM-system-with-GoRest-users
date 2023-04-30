(() => {
    const SERVER_URL = 'https://gorest.co.in/public/v2';
    const URL_PREFIX = '/users';
    // clientsList = [
    //     {
    //     id:1217937,
    //     name:"Ms. Jagathi Malik",
    //     email:"malik_jagathi_ms@steuber-kunde.example",
    //     gender:"female",
    //     status:"active"
    //     },
    //     {id:1217936,
    //     name:"Datta Acharya",
    //     email:"datta_acharya@cole-lockman.example",
    //     gender:"male",
    //     status:"inactive"
    //     },
    //     {id:1217935,
    //     name:"Rev. Madhuri Chattopadhyay",
    //     email:"chattopadhyay_rev_madhuri@reichel-barrows.test",
    //     gender:"female",
    //     status:"inactive"}];

    const validateSuccessClass = 'just-validate-success-field';
    const validationErrorClass = 'just-validate-error-field';
      document.addEventListener('DOMContentLoaded', async function() {
        // элементы таблицы
        const $tableBody = document.querySelector('tbody');
            $btnTableID = document.getElementById('table-btn-id');
            $btnTableArrowID = document.getElementById('table-btn-arrow-id');
            $btnTableFIO = document.getElementById('table-btn-fio');
            $btnTableArrowFIO = document.getElementById('table-btn-arrow-fio');
            $btnTableAFIO = document.getElementById('table-btn-a-fio');
            $btnTableCreateDate = document.getElementById('table-btn-createDate');
            $btnTableArrowCreateDate = document.getElementById('table-btn-arrow-createDate');
            $btnTableUpdateDate = document.getElementById('table-btn-updateDate');
            $btnTableArrowUpdateDate = document.getElementById('table-btn-arrow-updateDate');
        
            $btnAddClient = document.getElementById('btn-add-client');

            $containerClients = document.getElementById('clients');

            $searchClientsInput = document.getElementById('search');

            $modalWindow = document.getElementById('modalWindow');
            $spinnerTableBody = document.getElementById('spinner-table-body');
            $mainError = document.querySelector('.error');

            $btnOpenSearch = document.querySelector('.header__logo-btn');
            $btnCloseSearch = document.getElementById('btn-close-search');

        // форма удаления клиента
        const formDeleteClient = document.createElement('form'),
              headerFormDeleteClient = document.createElement('h2'),
              divFormDeleteClient = document.createElement('div'),
              btnDeleteFormDeleteClient = document.createElement('button'),
              spinnerBtnDelete = document.createElement('span'),
              btnCancelFormDeleteClient = document.createElement('button'),
              btnCloseFormDeleteClient = document.createElement('button'),
              formErrorDelete = document.createElement('div');
            
          $modalWindow.style.display = '';
          formDeleteClient.classList.add('form', 'form-delete', 'flex');
          headerFormDeleteClient.classList.add('form__title', 'form-delete__title');
          headerFormDeleteClient.textContent = 'Удалить клиента';
          divFormDeleteClient.classList.add('form-delete__descr');
          divFormDeleteClient.textContent = 'Вы действительно хотите удалить данного клиента?';
          btnDeleteFormDeleteClient.classList.add('mybtn', 'form__btn-purple', 'flex');
          btnDeleteFormDeleteClient.setAttribute('type', 'submit');
          btnDeleteFormDeleteClient.textContent = 'Удалить';
          spinnerBtnDelete.classList.add('spinner-border', 'spinner-border-sm', 'spinner-border-btn-purple');
          btnCancelFormDeleteClient.classList.add('form__btn-cancel-delete', 'form-delete__btn-cancel');
          btnCancelFormDeleteClient.setAttribute('type', 'button');
          btnCancelFormDeleteClient.textContent = 'Отмена';
          btnCloseFormDeleteClient.classList.add('btn-close','btn-close-form', 'form-delete__btn-close');
          btnCloseFormDeleteClient.setAttribute('type', 'button');
          btnCloseFormDeleteClient.setAttribute('aria-label', 'Close');
          formErrorDelete.classList.add('form__error');

          $containerClients.append(formDeleteClient);
          formDeleteClient.append(headerFormDeleteClient);
          formDeleteClient.append(divFormDeleteClient);
          formDeleteClient.append(formErrorDelete);
          formDeleteClient.append(btnDeleteFormDeleteClient);
          formDeleteClient.append(btnCancelFormDeleteClient);
          formDeleteClient.append(btnCloseFormDeleteClient);
          btnDeleteFormDeleteClient.prepend(spinnerBtnDelete);

        //   // форма создания и изменения клиента
        //   const formClient = document.createElement('form'),
        //       divHeaderFormClient = document.createElement('div'),
        //       headerFormClient = document.createElement('h2'),
        //       spanFormClient = document.createElement('span'),
        //       divInputFormClient = document.createElement('div'),
        //       labelNameFormClient = document.createElement('label'),
        //       labelEmailFormClient = document.createElement('label'),
        //       inputNameFormClient = document.createElement('input'),
        //       inputEmailFormClient = document.createElement('input'),
        //       placeholderNameFormClient = document.createElement('div'),
        //       spanNameFormClient = document.createElement('span'),
        //       spanEmailFormClient = document.createElement('span'),
        //       placeholderEmailFormClient = document.createElement('div'),
        //       // selectGenderFormClient = document.createElement('select'),
        //       // option0GenderFormClient = document.createElement('option'),
        //       // option1GenderFormClient = document.createElement('option'),
        //       // option2GenderFormClient = document.createElement('option'),
        //       // selectStatusFormClient = document.createElement('select'),
        //       // option0StatusFormClient = document.createElement('option'),
        //       // option1StatusFormClient = document.createElement('option'),
        //       // option2StatusFormClient = document.createElement('option'),
        //       btnSaveFormClient = document.createElement('button'),
        //       btnDeleteFormClient = document.createElement('button'),
        //       btnCloseFormClient = document.createElement('button'),
        //       btnCancelFormClient = document.createElement('button'),
        //       spinnerBtnSave = document.createElement('span'),
        //       formError = document.createElement('div');
          
         
        //   formClient.classList.add('form', 'form-update', 'flex');
        //   formClient.setAttribute('id', 'formClient');
        //   divHeaderFormClient.classList.add('form__container-title', 'flex');
        //   headerFormClient.classList.add('form__title');
        //   spanFormClient.classList.add('form__title-id');
        //   spanFormClient.setAttribute('id', 'formTitleId');
        //   divInputFormClient.classList.add('form__container-input');
        //   labelNameFormClient.classList.add('form__placeinput');
        //   labelEmailFormClient.classList.add('form__placeinput');
        //   inputNameFormClient.classList.add('form__input');
        //   inputNameFormClient.setAttribute('type', 'text');
        //   inputNameFormClient.setAttribute('id', 'inputName');
        //   inputEmailFormClient.classList.add('form__input');
        //   inputEmailFormClient.setAttribute('type', 'email');
        //   inputEmailFormClient.setAttribute('id', 'inputEmail');
        //   placeholderNameFormClient.classList.add('form__place-holder');
        //   placeholderNameFormClient.textContent = 'Имя';
        //   spanNameFormClient.textContent = '*';
        //   placeholderEmailFormClient.classList.add('form__place-holder');
        //   placeholderEmailFormClient.textContent = 'Email';
        //   spanEmailFormClient.textContent = '*';
          
        //   btnSaveFormClient.classList.add('btn', 'mybtn', 'form__btn-purple', 'flex');
        //   btnSaveFormClient.setAttribute('type', 'submit');
        //   btnSaveFormClient.setAttribute('id', 'btn-submit-formUpdate');
        //   formError.classList.add('form__error');
          
        //   btnSaveFormClient.textContent = 'Сохранить';
        //   spinnerBtnSave.classList.add('spinner-border', 'spinner-border-sm', 'spinner-border-btn-purple');
          
        //   btnDeleteFormClient.classList.add('form__btn-cancel-delete', 'form__btn-delete');
        //   btnDeleteFormClient.setAttribute('id', 'btnDeleteFormClient');
        //   btnDeleteFormClient.setAttribute('type', 'button');
        //   btnDeleteFormClient.textContent = 'Удалить клиента';
        //   btnCancelFormClient.classList.add('form__btn-cancel-delete', 'form__btn-cancel');
        //   btnCancelFormClient.setAttribute('type', 'button');
        //   btnCancelFormClient.textContent = 'Отмена';
        //   btnCloseFormClient.classList.add('btn-close', 'btn-close-form');
        //   btnCloseFormClient.setAttribute('aria-label', 'Close');
        //   btnCloseFormClient.setAttribute('type', 'button');
        //   btnCloseFormClient.setAttribute('id', 'btn-close-formUpdate');

        //   $containerClients.append(formClient);

        //   divHeaderFormClient.append(headerFormClient, spanFormClient);
        //   // selectGenderFormClient.append( option0GenderFormClient, option1GenderFormClient, option2GenderFormClient);
        //   // selectStatusFormClient.append(option0StatusFormClient, option1StatusFormClient, option2StatusFormClient);
        //   divInputFormClient.append(labelNameFormClient, labelEmailFormClient);
        // //   labelLastnameFormClient.append(inputLastnameFormClient, placeholderLastnameFormClient);
        //   labelNameFormClient.append(inputNameFormClient, placeholderNameFormClient);
        //   // option2GenderFormClient.setAttribute('selected', 'true');
        // //   labelSurnameFormClient.append(inputSurnameFormClient, placeholderSurnameFormClient);
        //   labelEmailFormClient.append(inputEmailFormClient, placeholderEmailFormClient);
        //   formClient.append(divHeaderFormClient, divInputFormClient);
        //   formClient.append(formError, btnSaveFormClient);
        //   btnSaveFormClient.prepend(spinnerBtnSave);
          
        //   formClient.append(btnDeleteFormClient, btnCancelFormClient, btnCloseFormClient);
          
         
        //   const validator1 = new window.JustValidate('#formClient');

        //   placeholderNameFormClient.append(spanNameFormClient);
        // //   placeholderSurnameFormClient.append(spanSurnameFormClient);
        //   placeholderEmailFormClient.append(spanEmailFormClient);
        //   formClient.style.setProperty('--top-form', '19.9%');
        //   $modalWindow.style.display = '';

        //         // валидация на инпуты ФИО
        //         validator1
        //         .addField(inputNameFormClient, [
        //         {
        //             rule: 'required',
        //             errorMessage: 'Введите имя',
        //         },
        //         {
        //             rule: 'customRegexp',
        //             value: /^[A-ZА-ЯЁ\-.\s]+$/i,
        //             errorMessage: 'Введите корректное имя',
        //         },
        //         ])
        //         .addField(inputEmailFormClient, [
        //         {
        //             rule: 'required',
        //             errorMessage: 'Заполните email',
        //         }, 
        //         {
        //             rule: 'email',
        //             errorMessage: 'Введите корректный email',
        //         }
        //         ]);
                
        const parametrsTippy = {
                content: '',
                theme: 'default',
                arrow: true,
                }
        // let choicesGender = new Choices;
        // let choicesStatus = new Choices;
            // очищение формы
        function clearForm() {
          const inputsFIO = formClient.querySelectorAll('.form__input'),
              placeholdersFIO = formClient.querySelectorAll('.form__place-holder');
              
          // удаление данных из инпутов
          for (const input of inputsFIO) {
            input.value = '';
            input.classList.remove(validationErrorClass);
          };
          spanFormClient.textContent = '';
          // возвращение плейсхолдеров в обычное состояние (в строке)
          for (const placeholder of placeholdersFIO) {
            placeholder.classList.remove('form__place-holder_update');
          }
          if (Array.from(document.querySelectorAll('.choices'))) {
            for (const iterator of Array.from(document.querySelectorAll('.choices'))) {
            iterator.remove();
          }
          }
      }

             // отрисовка иконок контактов в таблицу
        function printContactsSvg(contact, tableCol) {
            let button = document.createElement('button');
              button.classList.add('btn-reset','contact__btn');
              tableCol.append(button);
              let svgPhone = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
              svgPhone.classList.add('contact__svg');
              svgPhone.style.height = "16";
              svgPhone.style.width = "16";
              svgPhone.style.viewBox = "100 100 16 16";
              let pathPhone = document.createElementNS('http://www.w3.org/2000/svg','path');
                pathPhone.setAttribute('fill-rule', 'evenodd');
                pathPhone.setAttribute('clip-rule', 'evenodd');
                pathPhone.setAttribute('d', 'M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z');
                pathPhone.style.fill = "#9873FF";
                button.append(svgPhone); 
                svgPhone.append(pathPhone);  
                parametrsTippy.content = `Email: ${contact}`;
              tippy(button, parametrsTippy);
          }

            // удаление строк в таблице
            function deleteList() {
                let delList = document.querySelectorAll('.clients__table-tr');
                for (const delItem of delList) {
                    delItem.remove();
                }
            }

              // удаление клиента
            async function deleteClientByID(id) {
            const response = fetch(SERVER_URL + URL_PREFIX + '/' + id, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json', 
                'Authorization': 'Bearer 3c6796e6a714a2eaa32c29988388ab58a1b238864107f300e4f3eb44c856af42',
            }
            });
            // (await response).json().then(function(value) {return value.message});
              const err = new TypeError();
              if ((await response).status === 200 ||(await response).status === 201|| (await response).status === 204) {
                return response;
              } else if ((await response).status === 404 || (await response).status === 422 || (await response).status.toString[0] === '5') {
                err.errorMessages = (await response).json().then(function(value) {return value.message});
              throw err;
                  // err.errorMessages = (await response).data;
              
              } else {
                err.errorMessages = 'Что-то пошло не так...';
              }
              throw err;
            
          }

        
        // запрос клиента для формы
        async function requestClientByID(id) {
            const response = await fetch(SERVER_URL + URL_PREFIX + '/' + id, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json', 
                  'Accept': 'application/json', 
                  'Authorization': 'Bearer 3c6796e6a714a2eaa32c29988388ab58a1b238864107f300e4f3eb44c856af42',
                }
              });
            const infClient = await response.json();
            if (infClient) {
              const err = new TypeError();
              if (response.status === 200 || response.status === 201 || response.status === 204) {
                return infClient;
              } else if (response.status === 404 || response.status === 422 || response.status.toString[0] === '5') {
                if (infClient.message) {
                  err.errorMessages = infClient.message;
                } else {
                  err.errorMessages = 'Что-то пошло не так...';
                }
              } else {
                err.errorMessages = 'Что-то пошло не так...';
              }
              throw err;
            } else {
            //   console.log('dfdf');
              throw new Error('Не удалось получить данные клиента');
              
            }
          
          }
          
        // отправка данных клиента на сервер
        async function sendingClient(dataa, id) {
          // console.log(id);
            if (id === '') {
              dop = '';
              meth = 'POST';
            } else {
              dop = `/${id}`;
              meth = 'PATCH';
            }

          // выполнение запроса
          const response = await fetch(SERVER_URL + URL_PREFIX + dop, {
            method: meth,
            body: JSON.stringify(dataa),
            headers: {
              'Content-type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer 3c6796e6a714a2eaa32c29988388ab58a1b238864107f300e4f3eb44c856af42',
            }
            });
          const clients = await response.json();
        
          if (clients) {
            const err = new TypeError();
            if (response.status === 200 || response.status === 201 || response.status === 204) {
              return clients;
            } else if (response.status === 404 || response.status === 422) {
             
                
                err.errorMessages = clients.map(err => ({
                  name: err.field, 
                  message: err.message,
              }))

            } else {
              err.errorMessages = 'Что-то пошло не так...';
            }
            throw err;
          } else {
            throw new Error('Не удалось получить данные клиента');
          }
        }

        async function getClientsForRender() {
            const response = await fetch(SERVER_URL + URL_PREFIX, {
                method: 'GET', 
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer 3c6796e6a714a2eaa32c29988388ab58a1b238864107f300e4f3eb44c856af42',
                }
            });
            // console.log(clientsList);
            
            const clientsList = await response.json();
            
            if (response.status === 200 || response.status === 201) {
              return clientsList;
              } else {
              const err = new TypeError();
              err.errorMessages = `${response.status} ${response.statusText}`;
              throw err;
            }

            // throw new Error('Не удалось создать нового пользователя');
            // if (clientsList) {
            //   const err = new TypeError();
            //   if (response.status === 200 || response.status === 201 || response.status === 204) {
            //     return clientsList;
            //   } else if (response.status === 404 || response.status === 422 || response.status.toString[0] === '5') {
            //     if (clientsList.message) {
            //       err.errorMessages = clientsList.message;
            //     } else {
            //       err.errorMessages = 'Что-то пошло не так...';
            //     }
            //   } else {
            //     err.errorMessages = 'Что-то пошло не так...';
            //   }
            //   throw err;
            // } else {
            //   throw new Error('Не удалось получить данные клиента');
            // }
            
          }


          function filterTable(array, value) {
            return array.filter(function(oneUser) {
                    let newName = oneUser.name.toUpperCase();
                    let newId = String(oneUser.id);
                    let newValue = value.toUpperCase().trim();
                    if (newName.includes(newValue) || newId.includes(newValue)) return true;
                
            });
        }
         
            
        // создание формы удаления
        async function createFormDeleteClient(id, tableStr) {
            // получаем данные о кнопке для добавления спиннера
            const btnDeleteTable = tableStr.querySelector('.table__body-btn-delete'),
                  spinnerDeleteTable = tableStr.querySelector('.table__body-btn-delete span');
            // изменяем состояния формы и модального окна на активные
            formDeleteClient.classList.add('is-active');
            formErrorDelete.textContent = '';
            $modalWindow.style.display = 'block';
            // обработка отправки
            formDeleteClient.addEventListener('submit', async function(evt) {
              evt.preventDefault();
              try {
                btnDeleteTable.classList.remove('table__body-btn-delete-after');
                spinnerDeleteTable.style.display = 'block';
                spinnerBtnDelete.style.display = 'block';
                await deleteClientByID(id);
                tableStr.remove();
                formDeleteClient.classList.remove('is-active');
                $modalWindow.style.display = 'none';
              } catch (err) {
                if (err.name !== 'TypeError') throw err;
                  if (err.errorMessages) {
                    
                    formErrorDelete.textContent = await err.errorMessages ;
                    } else {
                      formErrorDelete.textContent = 'Что-то пошло не так ...';
                    }
              } finally {
                btnDeleteTable.classList.add('table__body-btn-delete-after');
                spinnerDeleteTable.style.display = 'none';
                spinnerBtnDelete.style.display = 'none';
              }
               
            })
  
            btnCancelFormDeleteClient.addEventListener('click', function() {
              formDeleteClient.classList.remove('is-active');
              $modalWindow.style.display = 'none';
            });
    
            btnCloseFormDeleteClient.addEventListener('click', function() {
              formDeleteClient.classList.remove('is-active');
              $modalWindow.style.display = 'none';
            });
          }

          // создание формы добавления и изменения данных клиента 
        async function createFormClient(id = '', tableStr = '') {

          $modalWindow.style.display = 'block';
        
          // форма создания и изменения клиента
          const formClient = document.createElement('form'),
              divHeaderFormClient = document.createElement('div'),
              headerFormClient = document.createElement('h2'),
              spanFormClient = document.createElement('span'),
              divInputFormClient = document.createElement('div'),
              labelNameFormClient = document.createElement('label'),
              labelEmailFormClient = document.createElement('label'),
              inputNameFormClient = document.createElement('input'),
              inputEmailFormClient = document.createElement('input'),
              placeholderNameFormClient = document.createElement('div'),
              spanNameFormClient = document.createElement('span'),
              spanEmailFormClient = document.createElement('span'),
              placeholderEmailFormClient = document.createElement('div'),
              selectGenderFormClient = document.createElement('select'),
              option0GenderFormClient = document.createElement('option'),
              option1GenderFormClient = document.createElement('option'),
              option2GenderFormClient = document.createElement('option'),
              selectStatusFormClient = document.createElement('select'),
              option0StatusFormClient = document.createElement('option'),
              option1StatusFormClient = document.createElement('option'),
              option2StatusFormClient = document.createElement('option'),
              btnSaveFormClient = document.createElement('button'),
              btnDeleteFormClient = document.createElement('button'),
              btnCloseFormClient = document.createElement('button'),
              btnCancelFormClient = document.createElement('button'),
              spinnerBtnSave = document.createElement('span'),
              formError = document.createElement('div');
          
         
          formClient.classList.add('form', 'form-update', 'flex', 'is-active');
          formClient.setAttribute('id', 'formClient');
          divHeaderFormClient.classList.add('form__container-title', 'flex');
          headerFormClient.classList.add('form__title');
          spanFormClient.classList.add('form__title-id');
          spanFormClient.setAttribute('id', 'formTitleId');
          divInputFormClient.classList.add('form__container-input');
          labelNameFormClient.classList.add('form__placeinput');
          labelEmailFormClient.classList.add('form__placeinput');
          inputNameFormClient.classList.add('form__input');
          inputNameFormClient.setAttribute('type', 'text');
          inputNameFormClient.setAttribute('id', 'inputName');
          inputEmailFormClient.classList.add('form__input');
          inputEmailFormClient.setAttribute('type', 'email');
          inputEmailFormClient.setAttribute('id', 'inputEmail');
          placeholderNameFormClient.classList.add('form__place-holder');
          placeholderNameFormClient.textContent = 'Имя';
          spanNameFormClient.textContent = '*';
          placeholderEmailFormClient.classList.add('form__place-holder');
          placeholderEmailFormClient.textContent = 'Email';
          spanEmailFormClient.textContent = '*';
          
          btnSaveFormClient.classList.add('btn', 'mybtn', 'form__btn-purple', 'flex');
          btnSaveFormClient.setAttribute('type', 'submit');
          btnSaveFormClient.setAttribute('id', 'btn-submit-formUpdate');
          formError.classList.add('form__error');
          
          btnSaveFormClient.textContent = 'Сохранить';
          spinnerBtnSave.classList.add('spinner-border', 'spinner-border-sm', 'spinner-border-btn-purple');
          btnDeleteFormClient.classList.add('form__btn-cancel-delete', 'form__btn-delete');
          btnDeleteFormClient.setAttribute('id', 'btnDeleteFormClient');
          btnDeleteFormClient.setAttribute('type', 'button');
          btnDeleteFormClient.textContent = 'Удалить клиента';
          btnCancelFormClient.classList.add('form__btn-cancel-delete', 'form__btn-cancel');
          btnCancelFormClient.setAttribute('type', 'button');
          btnCancelFormClient.textContent = 'Отмена';
          btnCloseFormClient.classList.add('btn-close', 'btn-close-form');
          btnCloseFormClient.setAttribute('aria-label', 'Close');
          btnCloseFormClient.setAttribute('type', 'button');
          btnCloseFormClient.setAttribute('id', 'btn-close-formUpdate');
          
          selectGenderFormClient.classList.add('form-select', 'form__select');
          selectGenderFormClient.setAttribute('name', 'select');
          selectStatusFormClient.classList.add('form-select', 'form__select');
          option0GenderFormClient.textContent = 'Пол*';
          option0GenderFormClient.setAttribute('value', '');
          option1GenderFormClient.setAttribute('value', 'female');
          option1GenderFormClient.textContent = 'Женский';
          option2GenderFormClient.setAttribute('value', 'male');
          option2GenderFormClient.textContent = 'Мужской';
          option0StatusFormClient.textContent = 'Статус*';
          option0StatusFormClient.setAttribute('value', '');
          option1StatusFormClient.setAttribute('value', 'active');
          option1StatusFormClient.textContent = 'Активный';
          option2StatusFormClient.setAttribute('value', 'inactive');
          option2StatusFormClient.textContent = 'Неактивный';
          divHeaderFormClient.append(headerFormClient, spanFormClient);
          divInputFormClient.append(labelNameFormClient, labelEmailFormClient);
          labelNameFormClient.append(inputNameFormClient, placeholderNameFormClient);
          labelEmailFormClient.append(inputEmailFormClient, placeholderEmailFormClient);
          formClient.append(divHeaderFormClient, divInputFormClient);
          formClient.append(formError, btnSaveFormClient);
          btnSaveFormClient.prepend(spinnerBtnSave);
          
          formClient.append(btnDeleteFormClient, btnCancelFormClient, btnCloseFormClient);
          selectGenderFormClient.append( option0GenderFormClient, option1GenderFormClient, option2GenderFormClient);
          selectStatusFormClient.append(option0StatusFormClient, option1StatusFormClient, option2StatusFormClient);
          divInputFormClient.append(selectGenderFormClient, selectStatusFormClient);
          placeholderNameFormClient.append(spanNameFormClient);
          placeholderEmailFormClient.append(spanEmailFormClient);
          $containerClients.append(formClient);
          const validator1 = new window.JustValidate('#formClient');
           // валидация на инпуты ФИО
           validator1
           .addField(inputNameFormClient, [
           {
               rule: 'required',
               errorMessage: 'Введите имя',
           },
           {
               rule: 'customRegexp',
               value: /^[A-ZА-ЯЁ\-.\s]+$/i,
               errorMessage: 'Введите корректное имя',
           },
           ])
           .addField(inputEmailFormClient, [
           {
               rule: 'required',
               errorMessage: 'Заполните email',
           }, 
           {
               rule: 'email',
               errorMessage: 'Введите корректный email',
           }
           ])
           .addField(selectGenderFormClient, [
              {
                  rule: 'required',
                  errorMessage: 'Выберите пол',
              }, 
            ])
            .addField(selectStatusFormClient, [
              {
                  rule: 'required',
                  errorMessage: 'Выберите статус',
              }, 
            ]);
          
            
            
            // проверка, чтобы плейсхолдеры у ФИО поднимались наверх, если инпуты заполнены
            inputNameFormClient.addEventListener('input', function() {
              if(inputNameFormClient.value != '') {
                placeholderNameFormClient.classList.add('form__place-holder_update');
                
              } else {
                placeholderNameFormClient.classList.remove('form__place-holder_update');
              }
            });
            inputEmailFormClient.addEventListener('input', function() {
              if(inputEmailFormClient.value != '') {
                placeholderEmailFormClient.classList.add('form__place-holder_update');
                
              } else {
                placeholderEmailFormClient.classList.remove('form__place-holder_update');
              }
            });
          
            // проверка на форму: новый клиент или изменить клиента 
            // (логика: есть id - изменить, нет id - новый клиент)
            if (id === '') {
              spanFormClient.textContent = '';
              btnCancelFormClient.classList.add('is-active');
              btnDeleteFormClient.classList.remove('is-active');
              headerFormClient.textContent = 'Новый клиент';
            } else {
              const btnUpdate = tableStr.querySelector('.table__body-btn-update');
              const spinnerUpdate = tableStr.querySelector('.table__body-btn-update span');
              btnCancelFormClient.classList.remove('is-active');
              btnDeleteFormClient.classList.add('is-active');
              headerFormClient.textContent = 'Изменить данные';
              formError.textContent = '';
              let infClient = [];
              // запрос на данные клиента по id и отрисовка
              try {
                btnUpdate.classList.remove('table__body-btn-update-after');
                spinnerUpdate.style.display = 'inline-block';
                infClient = await requestClientByID(id);
                
              } catch (err) {
                console.log(err.errorMessages);
                if (err.name !== 'TypeError') throw err;
                if (err.errorMessages) { 
                      formError.textContent = err.errorMessages;
                  }
              } finally {
                btnUpdate.classList.add('table__body-btn-update-after');
                spinnerUpdate.style.display = 'none';
              }

              spanFormClient.textContent = `ID: ${id}`;
              placeholderNameFormClient.classList.add('form__place-holder_update');
              inputNameFormClient.value = infClient.name;
              placeholderEmailFormClient.classList.add('form__place-holder_update');
              inputEmailFormClient.value = infClient.email;

              if (infClient.gender === 'male') option2GenderFormClient.setAttribute('selected', 'true');
              if (infClient.gender === 'female') option1GenderFormClient.setAttribute('selected', 'true');
              if (infClient.status === 'active') option1StatusFormClient.setAttribute('selected', 'true');
              if (infClient.status === 'inactive') option2StatusFormClient.setAttribute('selected', 'true');
              

            }
            let choicesGender = new Choices(selectGenderFormClient, {
              searchEnabled: false,
              editItems: true,
              allowHTML: false,
              placeholder: true,
              itemSelectText: '',
              });
            let choicesStatus = new Choices(selectStatusFormClient, {
              searchEnabled: false,
              editItems: true,
              allowHTML: false,
              placeholder: true,
              itemSelectText: '',
              });
            
            
            formClient.addEventListener('submit', async function(evt) {
              evt.preventDefault();

              
              if (inputNameFormClient.classList.contains(validateSuccessClass)&&
              inputEmailFormClient.classList.contains(validateSuccessClass)&&
              selectStatusFormClient.classList.contains(validateSuccessClass)&&
              selectGenderFormClient.classList.contains(validateSuccessClass)) {
                let bodyResponse = {
                  name: inputNameFormClient.value,
                  gender: selectGenderFormClient.value,
                  status: selectStatusFormClient.value,
                  email: inputEmailFormClient.value,
                }
  
                try {
                  spinnerBtnSave.style.display = 'block';
                  await sendingClient(bodyResponse, id);
                  formClient.remove();
                  $modalWindow.style.display = 'none';
                } catch (err) {
                  if (err.name !== 'TypeError') throw err;
                  if (err.errorMessages) {
                    console.log(err.errorMessages);
                    // formError.textContent = err.errorMessages;
                      formError.textContent = err.errorMessages
                          .map(errorMessage => `${errorMessage.name} ${errorMessage.message}`);
                          
                  } else {
                    formError.textContent = 'Что-то пошло не так ...';
                  }
              } finally {
                  spinnerBtnSave.style.display = 'none';
              }
          
                await renderClientsTable();
                // clearForm();
                
              }
            
            });
            // обработчик на кнопку "крестик"
            btnCloseFormClient.addEventListener('click', () => {
              // formClient.classList.remove('is-active');
              formClient.remove();
              $modalWindow.style.display = 'none';
            });
            // обработчик на кнопку отмена
            btnCancelFormClient.addEventListener('click', () => {
              // formClient.classList.remove('is-active');
              formClient.remove();
              $modalWindow.style.display = 'none';
            });
            // обработчик на кнопку удалить
            btnDeleteFormClient.addEventListener('click', async function() {
              formClient.remove();
              // formClient.remove();
              $modalWindow.style.display = 'none';
              await createFormDeleteClient(id, tableStr);
            });
            // закрытие формы и модального окна при клике на модальное окно
            window.onclick = function(e) {
              if(e.target == $modalWindow) {
                formClient.remove();
                $modalWindow.style.display = 'none';
              }
            };
  
            
          
          }
          

        async function getClientItem(obj) {
            // создание строки и ячеек таблицы
            const tableStr = document.createElement('tr'),
                tableCol1 = document.createElement('td'),
                tableCol2 = document.createElement('td'),
                tableCol3 = document.createElement('td'),
                tableCol4 = document.createElement('td'),
                tableCol5 = document.createElement('td'),
                tableCol6 = document.createElement('td'),
                divGroupButtons = document.createElement('div'),
                buttonUpdate = document.createElement('button'),
                spanbuttonUpdate = document.createElement('span'), 
                buttonDelete = document.createElement('button'),
                spanbuttonDelete = document.createElement('span');
               

            // добавление классов для строки таблицы
            tableStr.classList.add('clients__table-tr');
            tableCol1.classList.add('clients__table_td');
            tableCol1.classList.add('clients__table_td-id');
            tableCol1.classList.add('table__header-col-first');
            tableCol2.classList.add('clients__table_td', 'clients__table_td-fio');
            tableCol3.classList.add('clients__table_td', 'clients__table_td-createDate');
            tableCol4.classList.add('clients__table_td', 'clients__table_td-lastCor');
            tableCol5.classList.add('clients__table_td', 'clients__table_td-contacts');
            tableCol6.classList.add('clients__table_td', 'clients__table_td-update', 'table__header-col-last');
            // отрисовка svg картинок для кнопок "изменить" и "удалить"
           
            
            // получение красивых данных по дате создания и изменения
            let gender;
            let status;
            obj.gender === 'male' ? gender = 'Мужской' : gender = 'Женский';
            obj.status === 'active' ? status = 'Активный' : status = 'Неактивный';
            
            tableCol1.textContent = obj.id;
            tableCol2.textContent = obj.name;

            tableCol3.textContent = gender;
            tableCol4.textContent = status;
            // отрисовка картинки для email
            printContactsSvg(obj.email, tableCol5);
            // добавление кнопок изменить/удалить
            buttonDelete.textContent = 'Удалить';
            buttonDelete.classList.add('table__body-btn', 'table__body-btn-delete', 'table__body-btn-delete-after', 'flex');
            spanbuttonDelete.classList.add('spinner-border', 'spinner-border-sm', 'spinner-border-btn-table', 'spinner-border-btn-table-delete');
            buttonUpdate.textContent = 'Изменить';
            buttonUpdate.classList.add('table__body-btn','table__body-btn-update', 'table__body-btn-update-after', 'flex');
            spanbuttonUpdate.classList.add('spinner-border', 'spinner-border-sm', 'spinner-border-btn-table', 'spinner-border-btn-table-update');
            divGroupButtons.classList.add('flex', 'table__body-group-btn');
            divGroupButtons.append(buttonUpdate);
            divGroupButtons.append(buttonDelete);
            $tableBody.append(tableStr);
            tableStr.append(tableCol1);
            tableStr.append(tableCol2);
            tableStr.append(tableCol3);
            tableStr.append(tableCol4);
            tableStr.append(tableCol5);
            tableStr.append(tableCol6);
            tableCol6.append(divGroupButtons);
            buttonDelete.prepend(spanbuttonDelete);
            buttonUpdate.prepend(spanbuttonUpdate);
          
            // обработчик кнопки изменить - создание формы изменения данных клиента
            buttonUpdate.addEventListener('click', async function() {
              $modalWindow.style.display = 'block';
              console.log(obj.id);
              await createFormClient(obj.id, tableStr);
            });
            // обработчик кнопки удалить - создание формы удаления клиента
            buttonDelete.addEventListener('click', async function() {
              await createFormDeleteClient(obj.id, tableStr);
            });
            
        }

        // задание флагов для сортировки по умолчанию: по id и по возрастанию
        let sortProperty = 'id';
        let sortDir = false;
        // задание классов для шапки колонки id - фиолетовый цвет
        $btnTableID.classList.add('is-active');
        $btnTableArrowID.classList.add('is-active');
        $btnTableArrowID.classList.add('is-trans');

        // функция отрисовки клиентов в таблицу, полученных с сервера
        // доп аргумент - строка из поиска для фильтрации
        async function renderClientsTable() {
            let clientsList;
            try {
              $mainError.style.display = 'none';
              $spinnerTableBody.style.display = 'block';
              clientsList = await getClientsForRender();
            } catch (err) {
              // console.log($mainError);
              $mainError.style.display = 'block';
              if (err.name !== 'TypeError') throw err
                if (err.errorMessages) {   
                  
                  $mainError.textContent = err.errorMessages;
              } else {
                $mainError.textContent = 'Что-то пошло не так ...';
              }
                
            } finally {
              $spinnerTableBody.style.display = 'none';
            }
              deleteList();
              let copyList = [...clientsList];
            //   copyList = addClientFIO(copyList);
  
              // сортировка
              copyList = copyList.sort(function(a, b) {
                  let sort = a[sortProperty] > b[sortProperty];
                  if (sortDir == false) sort = a[sortProperty] < b[sortProperty];
                  if (sort) return -1;
              }); 

              if ($searchClientsInput.value.trim() !== "") {
                copyList = filterTable(copyList, $searchClientsInput.value);
              };
  
              // отрисовка каждого клиента в таблицу
              for (const iterator of copyList) {
                  await getClientItem(iterator);
              }
          }

        

        // первоначальная отрисовка списка клиентов
      await renderClientsTable();


      // сортировка по клику заголовка колонки id
      $btnTableID.addEventListener('click', async function() {
        sortDir = !sortDir;
        sortProperty = 'id';
        // подключаем активные классы для 
        $btnTableID.classList.add('is-active');
        $btnTableArrowID.classList.add('is-active');
        $btnTableArrowID.classList.toggle('is-trans');
        // отключаем активные классы у остальных
        $btnTableFIO.classList.remove('is-active');
        $btnTableAFIO.classList.remove('is-active');
        $btnTableArrowFIO.classList.remove('is-active');
        $btnTableCreateDate.classList.remove('is-active');
        $btnTableArrowCreateDate.classList.remove('is-active');
        $btnTableUpdateDate.classList.remove('is-active');
        $btnTableArrowUpdateDate.classList.remove('is-active');
        await renderClientsTable();
    });
    // сортировка по клику заголовка колонки Имя
    $btnTableFIO.addEventListener('click', async function() {
        sortDir = !sortDir;
        sortProperty = 'name';
        // подключаем активные классы для 
        $btnTableFIO.classList.add('is-active');
        $btnTableArrowFIO.classList.add('is-active');
        $btnTableAFIO.classList.add('is-active');
        $btnTableArrowFIO.classList.toggle('is-trans');
        // отключаем активные классы у остальных
        $btnTableID.classList.remove('is-active');
        $btnTableArrowID.classList.remove('is-active');
        $btnTableCreateDate.classList.remove('is-active');
        $btnTableArrowCreateDate.classList.remove('is-active');
        $btnTableUpdateDate.classList.remove('is-active');
        $btnTableArrowUpdateDate.classList.remove('is-active');
        await renderClientsTable();
    });
    // сортировка по клику заголовка колонки пол
    $btnTableCreateDate.addEventListener('click', async function() {
        sortDir = !sortDir;
        sortProperty = 'gender';
        // подключаем активные классы для 
        $btnTableCreateDate.classList.add('is-active');
        $btnTableArrowCreateDate.classList.add('is-active');
        $btnTableArrowCreateDate.classList.toggle('is-trans');
        // отключаем активные классы у остальных
        $btnTableAFIO.classList.remove('is-active');
        $btnTableID.classList.remove('is-active');
        $btnTableArrowID.classList.remove('is-active');
        $btnTableFIO.classList.remove('is-active');
        $btnTableArrowFIO.classList.remove('is-active');
        $btnTableUpdateDate.classList.remove('is-active');
        $btnTableArrowUpdateDate.classList.remove('is-active');
        await renderClientsTable();
    });
    // сортировка по клику заголовка колонки статус
    $btnTableUpdateDate.addEventListener('click', async function() {
        sortDir = !sortDir;
        sortProperty = 'status';
        // подключаем активные классы для 
        $btnTableUpdateDate.classList.add('is-active');
        $btnTableArrowUpdateDate.classList.add('is-active');
        $btnTableArrowUpdateDate.classList.toggle('is-trans');
        // отключаем активные классы у остальных
        $btnTableAFIO.classList.remove('is-active');
        $btnTableID.classList.remove('is-active');
        $btnTableArrowID.classList.remove('is-active');
        $btnTableFIO.classList.remove('is-active');
        $btnTableArrowFIO.classList.remove('is-active');
        $btnTableCreateDate.classList.remove('is-active');
        $btnTableArrowCreateDate.classList.remove('is-active');
        await renderClientsTable();
    });

    $searchClientsInput.addEventListener('input', async function() {
      await renderClientsTable();
    });

    // модальное окно
    $btnAddClient.addEventListener('click', async function() {
        await createFormClient();
        $modalWindow.style.display = 'block';
      });
    
    // скролл
      let simpleBar = new SimpleBar(document.getElementById('table'), {
        autoHide: false,
        scrollbarMaxSize: 70
      });

    //   // в мобильной версии: лого - кнопка для открытия поиска (фильтрации)
    //   $btnOpenSearch.addEventListener('click', function() {
    //     $searchClientsInput.classList.add('is-active');
    //     $btnCloseSearch.classList.add('is-active');
    //   })
    //   // в мобильной версии: появляется кнопка крестик для закрытия поиска (фильтрации)
    //   $btnCloseSearch.addEventListener('click', function() {
    //     $searchClientsInput.classList.remove('is-active');
    //     $btnCloseSearch.classList.remove('is-active');
    //   } )

          
    });
})();