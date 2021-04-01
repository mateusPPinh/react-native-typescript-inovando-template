// import { validateBr } from 'js-brasil';
import { setupYup } from '../../config/yup';

const Yup = setupYup();

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  nome: Yup.string().required(),
  // cpf: Yup.string()
  //   .required()
  //   .test('cpf', 'CPF Inválido', value => {
  //     if (value) return;
  //     // eslint-disable-next-line consistent-return
  //     return validateBr.cpf(value);
  //   }),
});

export default schema;
