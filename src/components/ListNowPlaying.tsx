import { Carousel } from "@mantine/carousel";
import { MovieDetail } from "../api/query";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Text, Title } from "@mantine/core";

const ListNowPlaying = ({
  listData,
  handleModal,
}: {
  listData: MovieDetail[];
  handleModal: (item: MovieDetail) => void;
}) => {
  return (
    <Carousel
      dragFree
      slideSize="85%"
      slideGap="md"
      withIndicators
      loop
      align="center"
      height={400}
      classNames={{
        indicators: "!-mb-4",
        indicator: "!bg-black !h-4 !w-4 !rounded-full",
      }}
    >
      {listData.length > 0
        ? listData.map((item) => (
            <Carousel.Slide key={`now-${item.id}`}>
              <div
                className="grid grid-cols-2 max-h-[386.33px] shadow-lg rounded-lg p-4"
                onClick={() => handleModal(item)}
                onKeyDown={() => handleModal(item)}
                tabIndex={0}
                role="button"
              >
                <LazyLoadImage
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={`${item.title}-poster-playing`}
                  className="w-1/2 rounded-lg object-cover object-center"
                  wrapperClassName="!flex justify-center w-full"
                  placeholderSrc={item.title}
                  effect="blur" // opacity | black-and-white
                />

                <div className="flex flex-col gap-4 px-4 w-full h-full">
                  <Title order={6}>{item.title}</Title>
                  <Text fz="md" lh="md" lineClamp={10}>
                    {item.overview}
                  </Text>
                </div>
              </div>
            </Carousel.Slide>
          ))
        : null}
    </Carousel>
  );
};

export default ListNowPlaying;
