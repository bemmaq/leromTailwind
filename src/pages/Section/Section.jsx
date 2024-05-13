import React from "react";
import strelka from '../../assets/strelka.svg'

const Section = () => {
  return (
    <div className="flex">
      <img className="w-[900px] h-[300px]"
        src="https://s3-alpha-sig.figma.com/img/f958/83e5/9b8033bf2314490508250e90f485381e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hOIFdCt5-KslYnDHFLDleLsy4FJHA299ndjgPB2-9YwGeGCRneQa7O7568~TjzfK7vS0qH~NoDzHC2lZgjDP~8kKV0pmAAFqfLKu06c7OTZHVIOI3ZUZ6mk4j~T5wLOp2FirBqVJyKF5uLI9-hsj9kX09c3wXq6JpcF7XZk4cl7zTJgaVvpGjlthPkwwxnBf67RE60UitTesBEkpHk8BPPfZfGm7F-f9tWkeoEiNxo95KfbIS9-sfvWy5fW3cbz9XocukKvNPhNhzipxAvaUYVFu0Spb3zGMBb8YwxvgADHrEG6lDHtoz1gM65j-D2oHFQ4qDijethYvtPTONDb~FA__"
        alt=""
      />
      <div className="w-[380px] h-[340px]  py-[30px] px-[25px]">
        <h2 className="font-semibold text-3xl">Кровати</h2>
        <p>Мини текст описания и преимущества
покупки данного направления.</p>
<p>Товары под заказ в наличии: 2030шт</p>
<p>Цены от: 42.000р</p>

<div className="mt-[30px] w-[50px] border-2 h-[50px] rounded-[50px] text-blue-100">
            <img className="py-[15px] px-[15px]" src={strelka} alt="" />
          </div>
      </div>
    </div>
  );
};

export default Section;
