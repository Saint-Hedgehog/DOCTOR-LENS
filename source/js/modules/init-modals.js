import {setupModal} from '../utils/modal';

const modals = document.querySelectorAll('.modal');
const modalFeedback = document.querySelector('.modal--feedback');
const modalFeedbackBtns = document.querySelectorAll('[data-modal="feedback"]');
const modalSuccess = document.querySelector('.modal--success');
const modalSuccessBtns = document.querySelectorAll('[data-modal="success"]');
const modalIncrease = document.querySelector('.modal--increase');
const modalIncreaseBtns = document.querySelectorAll('[data-modal="increase"]');
const modalDisease = document.querySelector('.modal--disease');
const modalDiseaseBtns = document.querySelectorAll('[data-modal="disease"]');
const modalCallBack = document.querySelector('.modal--call-back');
const modalCallBackBtns = document.querySelectorAll('[data-modal="call-back"]');

// аргументы setupModal(modal, closeCallback, modalBtns, openCallback, noPrevDefault, preventScrollLock)
// возможна инициализация только с первыми аргументом,
// если вам нужно открывать модалку в другом месте под какими-нибудь условиями
const initModals = () => {
  // фикс для редких случаев, когда модалка появляется при загрузке страницы
  window.addEventListener('load', () => {
    if (modals.length) {
      modals.forEach((el) => {
        setTimeout(() => {
          el.classList.remove('modal--preload');
        }, 100);
      });
    }
  });

  if (modalFeedback && modalFeedbackBtns.length) {
    setupModal(modalFeedback, false, modalFeedbackBtns, false, false);
  }
  if (modalSuccess && modalSuccessBtns.length) {
    setupModal(modalSuccess, false, modalSuccessBtns);
  }
  if (modalIncrease && modalIncreaseBtns.length) {
    setupModal(modalIncrease, false, modalIncreaseBtns);
  }
  if (modalDisease && modalDiseaseBtns.length) {
    setupModal(modalDisease, false, modalDiseaseBtns);
  }
  if (modalCallBack && modalCallBackBtns.length) {
    setupModal(modalCallBack, false, modalCallBackBtns);
  }
};

export {initModals};
