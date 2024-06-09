import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const Statistics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div ref={ref}>
      <dl className="grid max-w-screen-xl grid-cols-2 gap-5 p-4 mx-auto text-gray-900 xl:grid-cols-4 dark:text-white sm:p-8">
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl font-extrabold">
            {inView ? <CountUp end={700} duration={2} /> : "0"}
          </dt>
          <dd className="text-gray-500 dark:text-gray-400">Active Customers</dd>
        </div>
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl font-extrabold">
            {inView ? <CountUp end={3000} duration={2} /> : "0"}
          </dt>
          <dd className="text-gray-500 dark:text-gray-400">Total Users</dd>
        </div>
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl font-extrabold">
            {inView ? <CountUp end={20} duration={2} /> : "0"}
          </dt>
          <dd className="text-gray-500 dark:text-gray-400">Organizations</dd>
        </div>
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl font-extrabold">
            {inView ? <CountUp end={800} duration={2} /> : "0"}
          </dt>
          <dd className="text-gray-500 dark:text-gray-400">Today's Visitors</dd>
        </div>
      </dl>
    </div>
  );
};

export default Statistics;
