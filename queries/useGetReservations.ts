// import { getReservations } from "@/apis/common";
// import { QUERIES } from "@/constants";
// import useInfiniteScroll from "@/hooks/useInfiniteScroll";

// export default function useGetReservations() {
//   const fetchReservations = async ({ pageParam = 1 }) => {
//     const { data } = await getReservations({
//       page: pageParam,
//       limit: 3,
//     });
//     return data;
//   };

//   const { data, ref, hasNextPage } = useInfiniteScroll<Reservation>({
//     queryKey: [QUERIES.GET_RESERVATIONS],
//     queryFn: fetchReservations,
//     suspense: true,
//   });

//   return {
//     data,
//     ref,
//     hasNextPage,
//   };
// }
