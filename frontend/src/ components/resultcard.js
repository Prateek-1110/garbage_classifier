function ResultCard({result}) {

  const best = result.predictions[0];

  return (

    <div className="mt-6 border-t pt-4">

      <h3 className="text-xl font-bold text-green-600">
        {best.class} ({best.confidence}%)
      </h3>

      <p className="mt-2 text-gray-600">
        {result.guide}
      </p>

    </div>

  );
}

export default ResultCard;