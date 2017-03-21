import Gumroad from 'gumroad-api';

export const checkPayment = ({ email }) => {
  const gumroad = new Gumroad({
    token: '12580ff5acf3270dfdd5736615e5c63dd776a35f31927a35649a906940c5c95f'
  });
  const date = new Date();
  const dateFormatted = date.toISOString().slice(0,10);
  return gumroad.listSales(dateFormatted, undefined, 1).then(sales => !!sales.sales.filter(sale => sale.email === email).length);
};
