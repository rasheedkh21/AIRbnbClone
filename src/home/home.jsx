
import {
  LOgodiv,
  BackImage,
  Filters,
  ImageDiv,
  Infos,
  NextDiv,
  Pricediv,
  Rating,
  Svgphotos,
  Writings,
} from "./HomeStyle";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import logo from "../assets/Icon.svg";
import logo1 from "../assets/icon (1).svg";
import logo2 from "../assets/icon (2).svg";
import logo3 from "../assets/Icon3.svg";
import logo4 from "../assets/Icon (4).svg";
import logo5 from "../assets/Icon (5).svg";
import logo6 from "../assets/Icon (6).svg";
import logo7 from "../assets/Icon (7).svg";
import logo8 from "../assets/Icon (8).svg";
import logo10 from "../assets/fire.svg";
import logo9 from "../assets/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg.svg";


const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "fit-content",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Svgphotos>
        <LOgodiv>
          <div>
            <img src={logo} alt="img" />
            <span>Amazing views</span>
          </div>
        </LOgodiv>
        <LOgodiv>
          <div>
            <img src={logo1} alt="img" />
            <span>OMG!</span>
          </div>
        </LOgodiv>
        <LOgodiv>
          <div>
            <img src={logo2} alt="img" />
            <span>Caves</span>
          </div>
        </LOgodiv>
        <LOgodiv>
          <div>
            <img src={logo3} alt="img" />
            <span>Treehouses</span>
          </div>
        </LOgodiv>
        <LOgodiv>
          <div>
            <img src={logo4} alt="img" />
            <span>Mansions</span>
          </div>
        </LOgodiv>
        <LOgodiv>
          <div>
            <img src={logo5} alt="img" />
            <span>Cabins</span>
          </div>
        </LOgodiv>
        <LOgodiv>
          <div>
            <img src={logo6} alt="img" />
            <span>Lakefront</span>
          </div>
        </LOgodiv>
        <LOgodiv>
          <div>
            <img src={logo7} alt="img" />
            <span>Islands!</span>
          </div>
        </LOgodiv>
        <LOgodiv>
          <div>
            <img src={logo8} alt="img" />
            <span>Beachfront</span>
          </div>
        </LOgodiv>
        <LOgodiv>
          <div>
            <img src={logo9} alt="img" />
            <span>Earth homes</span>
          </div>
        </LOgodiv>
        <LOgodiv>
          <div>
            <img src={logo10} alt="img" />
            <span>Trending</span>
          </div>
        </LOgodiv>
        <NextDiv>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
          >
            <path
              d="M4.9375 1.5L9.17233 5.73484C9.31878 5.88128 9.31878 6.11872 9.17233 6.26517L4.9375 10.5"
              stroke="black"
              stroke-width="2"
            />
          </svg>
        </NextDiv>
        <Filters>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="14"
            // viewBox="0 0 15 14"
            // fill="none"
          >
            <path
              d="M4.81265 7C5.9554 7 6.9284 7.73063 7.2889 8.75H12.6876V10.5H7.28802C7.12774 10.954 6.84571 11.3552 6.47276 11.6598C6.09981 11.9643 5.65031 12.1605 5.17341 12.2267C4.6965 12.293 4.21055 12.2269 3.76869 12.0356C3.32682 11.8443 2.94606 11.5352 2.66804 11.1421C2.39001 10.749 2.22542 10.287 2.19227 9.80669C2.15911 9.32634 2.25867 8.84612 2.48005 8.41854C2.70143 7.99096 3.03612 7.63248 3.44751 7.3823C3.8589 7.13212 4.33116 6.99987 4.81265 7ZM4.81265 8.75C4.58058 8.75 4.35802 8.84219 4.19393 9.00628C4.02983 9.17038 3.93765 9.39294 3.93765 9.625C3.93765 9.85706 4.02983 10.0796 4.19393 10.2437C4.35802 10.4078 4.58058 10.5 4.81265 10.5C5.04471 10.5 5.26727 10.4078 5.43137 10.2437C5.59546 10.0796 5.68765 9.85706 5.68765 9.625C5.68765 9.39294 5.59546 9.17038 5.43137 9.00628C5.26727 8.84219 5.04471 8.75 4.81265 8.75ZM10.0626 1.75C10.5439 1.75009 11.0158 1.88247 11.4269 2.13266C11.838 2.38285 12.1724 2.74122 12.3935 3.16862C12.6147 3.59601 12.7141 4.07598 12.6809 4.55606C12.6477 5.03614 12.4832 5.49786 12.2053 5.89075C11.9274 6.28364 11.5469 6.59259 11.1053 6.78382C10.6637 6.97506 10.178 7.04123 9.70138 6.97509C9.22473 6.90896 8.77542 6.71306 8.40257 6.40882C8.02972 6.10458 7.74768 5.7037 7.58727 5.25H2.18765V3.5H7.5864C7.76753 2.98806 8.10293 2.54487 8.5464 2.23146C8.98987 1.91805 9.51961 1.74984 10.0626 1.75ZM10.0626 3.5C9.83058 3.5 9.60802 3.59219 9.44393 3.75628C9.27983 3.92038 9.18765 4.14294 9.18765 4.375C9.18765 4.60706 9.27983 4.82962 9.44393 4.99372C9.60802 5.15781 9.83058 5.25 10.0626 5.25C10.2947 5.25 10.5173 5.15781 10.6814 4.99372C10.8455 4.82962 10.9376 4.60706 10.9376 4.375C10.9376 4.14294 10.8455 3.92038 10.6814 3.75628C10.5173 3.59219 10.2947 3.5 10.0626 3.5Z"
              fill="#222222"
            />
          </svg>
          <p>Filters</p>
        </Filters>
      </Svgphotos>

      <Pricediv>
        <h1>Display total price</h1>
        <div>
          <input type="text" placeholder="Includes all fees, before taxes" />
        </div>
        <div className="items"></div>
      </Pricediv>
      <ImageDiv>
        <Infos>
          <BackImage>
            <div></div>
          </BackImage>
          <Writings>
            <Rating>
              <div>
                <h1>Knoxville, Tennessee</h1>
              </div>
              <div>
                <StarOutlineIcon style={{ cursor: "pointer" }} />
                <p>5.00</p>
              </div>
            </Rating>
            <p>Mountain and lake views</p>
            <p>Apr 16 – 21</p>
            <h1>$388 night</h1>
          </Writings>
        </Infos>
        <Infos>
          <BackImage>
            <div className="imagetw"></div>
          </BackImage>
          <Writings>
            <Rating>
              <div>
                <h1>Knoxville, Tennessee</h1>
              </div>
              <div>
                <StarOutlineIcon style={{ cursor: "pointer" }} />
                <p>5.00</p>
              </div>
            </Rating>
            <p>Mountain and lake views</p>
            <p>Apr 16 – 21</p>
            <h1>$388 night</h1>
          </Writings>
        </Infos>{" "}
        <Infos>
          <BackImage>
            <div></div>
          </BackImage>
          <Writings>
            <Rating>
              <div>
                <h1>Knoxville, Tennessee</h1>
              </div>
              <div>
                <StarOutlineIcon style={{ cursor: "pointer" }} />
                <p>5.00</p>
              </div>
            </Rating>
            <p>Mountain and lake views</p>
            <p>Apr 16 – 21</p>
            <h1>$388 night</h1>
          </Writings>
        </Infos>{" "}
        <Infos>
          <BackImage>
            <div></div>
          </BackImage>
          <Writings>
            <Rating>
              <div>
                <h1>Knoxville, Tennessee</h1>
              </div>
              <div>
                <StarOutlineIcon style={{ cursor: "pointer" }} />
                <p>5.00</p>
              </div>
            </Rating>
            <p>Mountain and lake views</p>
            <p>Apr 16 – 21</p>
            <h1>$388 night</h1>
          </Writings>
        </Infos>
        <Infos>
          <BackImage>
            <div></div>
          </BackImage>
          <Writings>
            <Rating>
              <div>
                <h1>Knoxville, Tennessee</h1>
              </div>
              <div>
                <StarOutlineIcon style={{ cursor: "pointer" }} />
                <p>5.00</p>
              </div>
            </Rating>
            <p>Mountain and lake views</p>
            <p>Apr 16 – 21</p>
            <h1>$388 night</h1>
          </Writings>
        </Infos>
        <Infos>
          <BackImage>
            <div></div>
          </BackImage>
          <Writings>
            <Rating>
              <div>
                <h1>Knoxville, Tennessee</h1>
              </div>
              <div>
                <StarOutlineIcon style={{ cursor: "pointer" }} />
                <p>5.00</p>
              </div>
            </Rating>
            <p>Mountain and lake views</p>
            <p>Apr 16 – 21</p>
            <h1>$388 night</h1>
          </Writings>
        </Infos>
        <Infos>
          <BackImage>
            <div></div>
          </BackImage>
          <Writings>
            <Rating>
              <div>
                <h1>Knoxville, Tennessee</h1>
              </div>
              <div>
                <StarOutlineIcon style={{ cursor: "pointer" }} />
                <p>5.00</p>
              </div>
            </Rating>
            <p>Mountain and lake views</p>
            <p>Apr 16 – 21</p>
            <h1>$388 night</h1>
          </Writings>
        </Infos>
        <Infos>
          <BackImage>
            <div></div>
          </BackImage>
          <Writings>
            <Rating>
              <div>
                <h1>Knoxville, Tennessee</h1>
              </div>
              <div>
                <StarOutlineIcon style={{ cursor: "pointer" }} />
                <p>5.00</p>
              </div>
            </Rating>
            <p>Mountain and lake views</p>
            <p>Apr 16 – 21</p>
            <h1>$388 night</h1>
          </Writings>
        </Infos>
        <Infos>
          <BackImage>
            <div></div>
          </BackImage>
          <Writings>
            <Rating>
              <div>
                <h1>Knoxville, Tennessee</h1>
              </div>
              <div>
                <StarOutlineIcon style={{ cursor: "pointer" }} />
                <p>5.00</p>
              </div>
            </Rating>
            <p>Mountain and lake views</p>
            <p>Apr 16 – 21</p>
            <h1>$388 night</h1>
          </Writings>
        </Infos>
        <Infos>
          <BackImage>
            <div></div>
          </BackImage>
          <Writings>
            <Rating>
              <div>
                <h1>Knoxville, Tennessee</h1>
              </div>
              <div>
                <StarOutlineIcon style={{ cursor: "pointer" }} />
                <p>5.00</p>
              </div>
            </Rating>
            <p>Mountain and lake views</p>
            <p>Apr 16 – 21</p>
            <h1>$388 night</h1>
          </Writings>
        </Infos>
        <Infos>
          <BackImage>
            <div></div>
          </BackImage>
          <Writings>
            <Rating>
              <div>
                <h1>Knoxville, Tennessee</h1>
              </div>
              <div>
                <StarOutlineIcon style={{ cursor: "pointer" }} />
                <p>5.00</p>
              </div>
            </Rating>
            <p>Mountain and lake views</p>
            <p>Apr 16 – 21</p>
            <h1>$388 night</h1>
          </Writings>
        </Infos>
        <Infos>
          <BackImage>
            <div></div>
          </BackImage>
          <Writings>
            <Rating>
              <div>
                <h1>Knoxville, Tennessee</h1>
              </div>
              <div>
                <StarOutlineIcon style={{ cursor: "pointer" }} />
                <p>5.00</p>
              </div>
            </Rating>
            <p>Mountain and lake views</p>
            <p>Apr 16 – 21</p>
            <h1>$388 night</h1>
          </Writings>
        </Infos>
        <Infos>
          <BackImage>
            <div></div>
          </BackImage>
          <Writings>
            <Rating>
              <div>
                <h1>Knoxville, Tennessee</h1>
              </div>
              <div>
                <StarOutlineIcon style={{ cursor: "pointer" }} />
                <p>5.00</p>
              </div>
            </Rating>
            <p>Mountain and lake views</p>
            <p>Apr 16 – 21</p>
            <h1>$388 night</h1>
          </Writings>
        </Infos>
        <Infos>
          <BackImage>
            <div></div>
          </BackImage>
          <Writings>
            <Rating>
              <div>
                <h1>Knoxville, Tennessee</h1>
              </div>
              <div>
                <StarOutlineIcon style={{ cursor: "pointer" }} />
                <p>5.00</p>
              </div>
            </Rating>
            <p>Mountain and lake views</p>
            <p>Apr 16 – 21</p>
            <h1>$388 night</h1>
          </Writings>
        </Infos>
        <Infos>
          <BackImage>
            <div></div>
          </BackImage>
          <Writings>
            <Rating>
              <div>
                <h1>Knoxville, Tennessee</h1>
              </div>
              <div>
                <StarOutlineIcon style={{ cursor: "pointer" }} />
                <p>5.00</p>
              </div>
            </Rating>
            <p>Mountain and lake views</p>
            <p>Apr 16 – 21</p>
            <h1>$388 night</h1>
          </Writings>
        </Infos>
        <Infos>
          <BackImage>
            <div></div>
          </BackImage>
          <Writings>
            <Rating>
              <div>
                <h1>Knoxville, Tennessee</h1>
              </div>
              <div>
                <StarOutlineIcon style={{ cursor: "pointer" }} />
                <p>5.00</p>
              </div>
            </Rating>
            <p>Mountain and lake views</p>
            <p>Apr 16 – 21</p>
            <h1>$388 night</h1>
          </Writings>
        </Infos>
      </ImageDiv>
    </div>
  );
};

export default Home;
