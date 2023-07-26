import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const LandingContent = () => {
  const testimonials = [
    {
      name: "Ramiz",
      avatar: "R",
      title: "Software Engineer",
      description: "This is the best application ever",
    },
    {
      name: "John",
      avatar: "J",
      title: "Full Stack Developer",
      description: "Developing the future of tech",
    },
    {
      name: "Emma",
      avatar: "E",
      title: "Product Manager",
      description: "Bringing ideas to life",
    },
    {
      name: "Sophia",
      avatar: "S",
      title: "UX Designer",
      description: "Designing seamless user experiences",
    },
    {
      name: "Michael",
      avatar: "M",
      title: "Data Scientist",
      description: "Discovering patterns in data",
    },
    {
      name: "Olivia",
      avatar: "O",
      title: "Frontend Developer",
      description: "Creating interactive web interfaces",
    },
    {
      name: "Daniel",
      avatar: "D",
      title: "Backend Developer",
      description: "Powering the engine of the web",
    },
    {
      name: "Lucas",
      avatar: "L",
      title: "DevOps Engineer",
      description: "Building and maintaining infrastructure",
    },
  ];

  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex item-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
