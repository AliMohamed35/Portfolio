import SayHelloButton from "../buttons/SayHello";

function Hero() {
  return (
    <>
      <section>
        <div>
          <h1>Hello, I'm Ali Mohamed</h1>

          <p>
            I'm a passionate web developer and freelancer based in Egypt, Cairo.
            I strives to build immersve and beautful web applications through
            carefully crafted code and user-centric design.
          </p>

          <SayHelloButton />

          <div className="grid"></div>
        </div>

        {/* Image div */}
        <div></div>
      </section>
    </>
  );
}

export default Hero;
