"use client";

import Container from "@/components/ui/Container";
import Title from "@/components/ui/Title";
import React, { useState, useMemo } from "react";

const Page = () => {
  const [range, setRange] = useState(100);

  const primeNumbers = useMemo(() => {
    console.log("Calculating prime numbers..."); // Just for demonstration
    const isPrime = (num: number) => {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };

    const primes = [];
    for (let i = 2; i <= range; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }, [range]);

  return (
    <Container>
      <Title title="useCallBack" />
      <div className="flex flex-col items-center gap-5">
        <h1>Prime Number List</h1>
        <label>
          Enter a range:
          <input
            className="text-black"
            type="number"
            value={range}
            onChange={(e) => setRange(parseInt(e.target.value))}
          />
        </label>
        <h2>Prime Numbers within the range of 2 to {range}:</h2>
        <ul>
          {primeNumbers.map((prime, index) => (
            <li key={index}>{prime}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Page;
