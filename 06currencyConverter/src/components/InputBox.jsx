/* eslint-disable react/prop-types */
import ReactSelect from "react-select";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions,
  selectCurrency,
  amountDisable,
}) {
  return (
    <div className="bg-white p-3 m-2 rounded-lg text-sm flex">
      <div className="w-1/2">
        <label className="text-black/70 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
          disabled={amountDisable}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/70 mb-2 w-full">Currency Type</p>
        <ReactSelect
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={{ value: selectCurrency, label: selectCurrency.toUpperCase() }}
          options={currencyOptions.map((currency) => ({
            value: currency,
            label: currency.toUpperCase(),
          }))}
          onChange={(selectedOption) =>
            onCurrencyChange && onCurrencyChange(selectedOption.value)
          }
          isSearchable={true}
          maxMenuHeight={190}
        />
      </div>
    </div>
  );
}

export default InputBox;