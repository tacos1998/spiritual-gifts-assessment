import './Quiz.css';
import { useState } from 'react';
import Collapsible from './Collapsible.tsx';

function Quiz() {
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedValue, setSelectedValue] = useState('none');
  const [error, setError] = useState(false);
  const [giftScores, setGiftScores] = useState([
    {
      gift: 'Administration',
      score: 0,
      description: "The Holy Spirit enables some individuals to motivate, direct and inspire God’s people in such a way that they voluntarily and harmoniously work together to do the Church’s work effectively. This gift involves being able to put things together, tie up all the “loose ends” and get things done while setting a pattern for others to follow. Adeptness at financing, planning, organizing, delegating responsibilities and problem-solving can be indications of the gift of administration. Hebrews 13:7, Judges 3:10, Exodus 18:13-16",
      parish: [
        {
          name: "Lazarus Ministry",
          description: "This ministry assists with setting up for funeral receptions to help comfort those who are mourning.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Knights of Columbus Council 8910",
          description: "The Knights of Columbus is a brotherhood of Catholic men 18 years of age and older who each play a part in improving the community. We stand together in faith, and are dedicated to upholding the principles of charity, unity, fraternity and patriotism while lending support and strength to our parish, home, community, and fellow Knights. Activities at St. Peter include planning and assisting at fundraisers, including Pancake Breakfasts and Lenten Fish Fries.",
          leader: "Jason Heidbreder",
          contact: "jasonheidbreder@yahoo.com, 850-581-2556"
        },
        {
          name: "Parish Dinners",
          description: "This ministry assists with planning, setting up for, and cleaning up after dinner events and parish potlucks.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Parish Office Volunteer",
          description: "This ministry is for those who are able to serve the parish by helping out at the Office. Volunteers assist with clerical work and are trained to answer phone calls to the church.",
          leader: "Ana Livoti-Fails",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Parish Library Volunteer",
          description: "Library Volunteers maintain the Parish Library, process book donations, and assist parishioners with checking out physical and digital materials.",
          leader: "Judy Holzschuh",
          contact: "library@saintpeter.me, 850-581-2556"
        },
        {
          name: "Elementary Faith Formation - Catechist, Aide, Teen Aide, Catechist Substitute",
          description: "Volunteers are needed to share their gift of faith with the children of our parish (VPK through 5th grade) during the school year. Classes meet on Sundays, from 9:15-10:15 a.m. Catechists plan and lead lessons, and are supported in the classroom by Aides and Teen Aides. In addition to these three positions, there is a need for Catechist Substitutes to fill in as needed.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Adult Faith Formation",
          description: "Those with a passion for teaching other adults about the Catholic faith are encouraged to get involved with planning and leading our Adult Faith Formation sessions on Sundays.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Weekly Collection Counters",
          description: "Volunteers are needed to help on Monday mornings with counting the Offertory collections from the past weekend.",
          leader: "Paul Johansen",
          contact: "finance@saintpeter.me, 850-581-2556"
        },
        {
          name: "Usher/Greeter",
          description: "Ushers greet parishioners and open the doors for the weekend Masses. They also assist with seating, collecting the offertory, handing out bulletins and straightening up the pews after Mass. Greeters make the first experience of our parish a positive one with a warm welcome and a friendly smile. This ministry provides a link to what is happening in the parish community by being available before and after the Mass to answer questions and share current events.",
          leader: "Tere Brenci",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Sacristan",
          description: "Sacristans prepare the sanctuary for the celebration of one Mass on weekends and Holy Days of Obligation. They work quietly behind-the-scenes to ensure that liturgies run smoothly, preparing the sacred vessels needed for liturgy, and cleaning and putting away all items afterwards. They also make sure all the other liturgical ministries are covered by those scheduled, or find substitutes. Screening and training is required.",
          leader: "Rose DeCotis",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Altar Server",
          description: "This ministry assists in the liturgical life of the parish during weekend Masses. Serving instills a sense of responsibility to the church and also enhances a personal relationship with Jesus as our youth take part in the Mass in such an intimate way. This ministry is open to anyone who has received the Sacraments of Baptism and First Holy Communion and is able to carry out all of the duties required. You will be trained in the duties and responsibilities of the ministry and will be asked to arrive 20 minutes before Mass begins.",
          leader: "Deacon Tony DeCotis",
          contact: "deacon@saintpeter.me, 850-581-2556"
        },
        {
          name: "Coffee and Donuts Ministry",
          description: "Volunteers are needed to help pick up donuts, brew coffee, set up tables, serve Coffee and Donuts, and clean up afterwards, which involves some work before and after one of our Sunday Masses.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Vacation Bible School (VBS) Volunteer",
          description: "Volunteers are needed to help with our annual summer VBS program. Opportunites for service include leading and teaching the program content and activities, serving as an aide to supervise children, making decorations to transform spaces and classrooms, and/or cleanup.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Young Adult Ministry",
          description: "Volunteers and leaders in this ministry help with scheduling, organizing, promoting, and running Young Adult Ministry activities and events. According to the United States Conference of Catholic Bishops, \"Young adults are persons in their late teens, twenties, and thirties who represent diverse cultural, racial, ethnic, educational, vocational, social, political, and spiritual backgrounds. They are college students, workers, and professionals; they are persons in military service; they are single, married, divorced, or widowed; they are with or without children; they are newcomers in search of a better life.\"",
          leader: "Tyler Acosta",
          contact: "music@saintpeter.me, 850-581-2556"
        },
        {
          name: "Stewardship Committee",
          description: "This committee assists in communicating the parish's vision for stewardship throughout the parish, and organizes the annual Ministry Fair.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        }
      ],
      local: [],
    },
    {
      gift: 'Apostleship',
      score: 0,
      description: "To exercise the gift of apostleship is to perceive and accept God’s call to lead others in their spirituality, and to be instrumental in acknowledging God’s grace and authority in the life of the Church. This gift involves being able to lead others wisely and compassionately and training others in spiritual matters. Apostleship includes a combination of wisdom, discernment, leadership and teaching. Matthew 4:18-22, Acts 14:21-23",
      parish: [
        {
          name: "Elementary Faith Formation - Catechist, Aide, Teen Aide, Catechist Substitute",
          description: "Volunteers are needed to share their gift of faith with the children of our parish (VPK through 5th grade) during the school year. Classes meet on Sundays, from 9:15-10:15 a.m. Catechists plan and lead lessons, and are supported in the classroom by Aides and Teen Aides. In addition to these three positions, there is a need for Catechist Substitutes to fill in as needed.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Adult Faith Formation",
          description: "Those with a passion for teaching other adults about the Catholic faith are encouraged to get involved with planning and leading our Adult Faith Formation sessions on Sundays.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Small Group Leader",
          description: "Small Groups follow Jesus' example of journeying through life and towards God together with a close group of fellow Christians. Leaders are trained in how to invite members and facililtate group discussions. Meeting times, locations, frequency, and topics/resources are flexible and vary depending on who is in the group, and the parish is able to assist in many of these areas. We are always in need of Small Group Leaders, so if this interests you, please prayerfully consider whether God is calling you to lead your parish community in this way.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Middle School Adult Ministry Team",
          description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our middle schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
          leader: "Amanda Martin",
          contact: "amartin@okaloosapa.com, 850-581-2556"
        },
        {
          name: "High School Adult Ministry Team",
          description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our high schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Order of Christian Initiation for Adults (OCIA) Sponsor",
          description: "A sponsor is an active Catholic that is willing to be a companion to an OCIA student as they go through the process of becoming Catholic. Sponsors attend class with students, meet or talk with them to answer questions and walk with them on their journey of faith.",
          leader: "Tom Lehmann",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Order of Christian Initiation for Adults (OCIA) Catechist Team",
          description: "Those who are knowledgable in their faith and who are interested in sharing Jesus with those who are considering becoming Catholic are encouraged to join the OCIA Catechist Team. Catechists assist in planning and teaching weekly lessons.",
          leader: "Tom Lehmann",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Vacation Bible School (VBS) Volunteer",
          description: "Volunteers are needed to help with our annual summer VBS program. Opportunites for service include leading and teaching the program content and activities, serving as an aide to supervise children, making decorations to transform spaces and classrooms, and/or cleanup.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Young Adult Ministry",
          description: "Volunteers and leaders in this ministry help with scheduling, organizing, promoting, and running Young Adult Ministry activities and events. According to the United States Conference of Catholic Bishops, \"Young adults are persons in their late teens, twenties, and thirties who represent diverse cultural, racial, ethnic, educational, vocational, social, political, and spiritual backgrounds. They are college students, workers, and professionals; they are persons in military service; they are single, married, divorced, or widowed; they are with or without children; they are newcomers in search of a better life.\"",
          leader: "Tyler Acosta",
          contact: "music@saintpeter.me, 850-581-2556"
        }
      ],
      local: [
        {
          name: "Prison Ministry",
          description: "This ministry answers Jesus' call to visit the imprisoned, and involves being available to talk and pray with the inmates. Volunteers undergo a background check and similar screening through the Okaloosa County Prison System.",
          leader: "Deacon Tony DeCotis",
          contact: "deacon@saintpeter.me, 850-581-2556"
        }
      ],
    },
    {
      gift: 'Caregiving',
      score: 0,
      description: "The Holy Spirit empowers some persons to willingly bear the burdens of others and help them in such a way that they can do their tasks more effectively. To exercise the gift of caregiving or helping is to give assistance or relief from distress where it is needed. This gift involves a willingness to help others even when the jobs may be messy or involve getting into close proximity with people who are sick or distressed. Matthew 25:34-40, Acts 6:2-4",
      parish: [
        {
          name: "Lazarus Ministry",
          description: "This ministry assists with setting up for funeral receptions to help comfort those who are mourning.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Extraordinary Minister of Holy Communion (EMHC)",
          description: "Extraordinary Ministers of Holy Communion are trained to assist the priest in the distribution of Holy Communion at Mass under extraordinary circumstances, and to bring communion to the sick or aged.",
          leader: "Father Doug Martin",
          contact: "pastor@saintpeter.me, 850-581-2556"
        },
        {
          name: "Nursery/Childcare Volunteer",
          description: "We are always in need of volunteers to help in the Nursery on Sundays, and to help with Childcare for various parish events. Volunteers undergo a Diocesan background check and video training.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Usher/Greeter",
          description: "Ushers greet parishioners and open the doors for the weekend Masses. They also assist with seating, collecting the offertory, handing out bulletins and straightening up the pews after Mass. Greeters make the first experience of our parish a positive one with a warm welcome and a friendly smile. This ministry provides a link to what is happening in the parish community by being available before and after the Mass to answer questions and share current events.",
          leader: "Tere Brenci",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Middle School Adult Ministry Team",
          description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our middle schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
          leader: "Amanda Martin",
          contact: "amartin@okaloosapa.com, 850-581-2556"
        },
        {
          name: "High School Adult Ministry Team",
          description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our high schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Outreach to Parish Homebound/Elderly",
          description: "This ministry is for those who to assist, talk with, and pray with the homebound and elderly in our parish.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Lazarus Ministry",
          description: "This ministry assists with setting up for funeral receptions to help comfort those who are mourning.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
      ],
      local: [
        {
          name: "Food For Thought",
          description: "Food For Thought is the go-to organization for fighting childhood hunger in Walton and Okaloosa Counties. Opportunities are available for volunteers of all ages. Every Tuesday, volunteers can assist with packing food in Destin (908 Airport Rd, Destin, FL 32541) and Santa Rosa Beach (132 Market St, Santa Rosa Beach, FL 32459). Every Wednesday, volunteers can assist with curbside service, mornings and/or evenings. Volunteers must complete paperwork and in-person training to get started.",
          leader: "Food For Thought",
          contact: "volunteer@fftfl.org, 850-290-4056"
        },
        {
          name: "Fort Walton Beach Center for Women",
          description: "The Fort Walton Beach Center for Women provides free and confidential services and information to pregnant women in Okaloosa County, and has various volunteer opportunities available for those who desire to share in this mission. Clients are served without regard to age, race, income, nationality, religious affiliation, disability or other arbitrary circumstances.",
          leader: "the Fort Walton Beach Center for Women",
          contact: "850-862-9020 between 9am and 12pm on Mondays and Wednesdays"
        },
        {
          name: "Pregnancy Resource Center of Navarre",
          description: "The Pregnancy Resource Center of Navarre provides free and confidential services and information to pregnant women in the Emerald Coast. Clients are served without regard to age, race, income, nationality, religious affiliation, disability or other arbitrary circumstances. Volunteers with skills in standard office software (Microsoft Word, Excel, etc.) are always needed to help with office work, as well as volunteers to help manage the organization's social media. Adult women (early 20s and up) with a passion for helping pregnant mothers in need are encouraged to become Client Advocates, who are trained to talk with and assist clients.",
          leader: "the Pregnancy Resource Center of Navarre",
          contact: "850-515-0334"
        },
        {
          name: "Opportunity Place",
          description: "Opportunity Place provides safe shelter, supportive services, and resources for the chronically homeless and for those experiencing homelessness due to a negative event or situation that occurred in their lives. Opportunity Place hosts Youth Nights every Tuesday and Thursday night from 5:30pm to 7pm, where volunteers come in and engage in activities with the children in the shelter. Friday morning volunteers are needed to answer the phone with shelter support. Volunteers fill out an application and are then added to a newsletter with information on new volunteer opportunities.",
          leader: "Opportunity Place",
          contact: "info@opifwb.org, 850-659-3190"
        },
        {
          name: "Shelter House",
          description: "Shelter House provides shelter, intervention and primary prevention programs to the community through education, awareness and advocating for social change. Volunteers that wish to work closely with participants or work on the 24-hour hotline are required to attend a 30-hour Core Competency Training. This is a 24-hour class (three full days) in addition to six hours of observation. Volunteers on the Rape Response Team (RRT) must complete Advocacy Core Training, which includes self-led online training, role playing and on-the-job training. For those not interested in direct service, opportunities include sorting through donations, collecting cell phones in the community, promoting and working events and fundraisers, handing out brochures and flyers, picking up donations, assisting with administrative duties, and much more. Opportunities for groups are also available. Your business, religious organization, youth group or other organization can work together for a group project.",
          leader: "the Shelter House Volunteer Coordinator",
          contact: "volunteer@shelterhousenwfl.org, 850-243-1201"
        },
        {
          name: "Catholic Charities of Northwest Florida",
          description: "Catholic Charities of Northwest Florida serves, empowers, and advocates for impoverished and vulnerable families and individuals of any race, religion or national origin across the Florida Panhandle. Volunteers are needed to help at the Food Pantry, which operates from 9am-12pm Mondays through Thursdays, and to help distribute lunches from 12:30-4pm, also Mondays through Thursdays. Volunteers are also needed to help in the office with administrative tasks. These opportunites are generally for adults, but families with children may also be able to assist.",
          leader: "Catholic Charities of Northwest Florida's Fort Walton Beach Office",
          contact: "850-244-2825"
        }
      ],
    },
    {
      gift: 'Communication',
      score: 0,
      description: "The Holy Spirit enables some of us to communicate or to understand in forms of communication beyond the ordinary. To exercise the gift of communication be familiar with or understand a foreign language or anything (such as ASL, Braille, art, music and more) other than our own native language. Acts 2:5-11, Psalm 104:2b-35",
      parish: [
        {
          name: "Weekend Choir",
          description: "Open to adults, youth and children with some singing talent or experience, choir members offer their voices in service to the parish for Sunday Mass and for other special feasts. Choir members are welcome to sing at any or all of our weekend Masses - 5pm Saturday Vigil, 8am Sunday Mass, and 10:30am Sunday Mass. Rehearsals take place 45 minutes prior to each Mass.",
          leader: "Tyler Acosta",
          contact: "music@saintpeter.me, 850-581-2556"
        },
        {
          name: "Cantor",
          description: "Cantors are singers interested in guiding the congregation in prayer and worship through song. They must have some singing talent and be able or willing to learn to lead a large assembly comfortably. We are always in need of cantors, who can volunteer to sing as frequently or infrequently as they like.",
          leader: "Tyler Acosta",
          contact: "music@saintpeter.me, 850-581-2556"
        },
        {
          name: "Instrumentalist",
          description: "Instrumentalists assist in leading the congregation in prayer and worship by offering their instrumental talents to the community. We are always in need of orchestral instrument players with some talent or experience at our weekend Masses, and especially for higher feasts like Christmas and Easter.",
          leader: "Tyler Acosta",
          contact: "music@saintpeter.me, 850-581-2556"
        },
        {
          name: "Seasonal Christmas/Easter Choir",
          description: "If you have some singing talent or experience, please prayefully consider joining our Seasonal Choir to sing for Christmas and/or Easter. Christmas Choir rehearsals usually begin around the First Sunday of Advent, and Easter Choir rehearsals usually begin around the First Sunday of Lent.",
          leader: "Tyler Acosta",
          contact: "music@saintpeter.me, 850-581-2556"
        },
        {
          name: "Middle School Adult Ministry Team",
          description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our middle schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
          leader: "Amanda Martin",
          contact: "amartin@okaloosapa.com, 850-581-2556"
        },
        {
          name: "High School Adult Ministry Team",
          description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our high schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Elementary Faith Formation - Catechist, Aide, Teen Aide, Catechist Substitute",
          description: "Volunteers are needed to share their gift of faith with the children of our parish (VPK through 5th grade) during the school year. Classes meet on Sundays, from 9:15-10:15 a.m. Catechists plan and lead lessons, and are supported in the classroom by Aides and Teen Aides. In addition to these three positions, there is a need for Catechist Substitutes to fill in as needed.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Reader",
          description: "Readers proclaim the living Word of God at Mass and lead the General Intercessions when the deacon is not present. A team of two ministers proclaim Holy Scripture at each weekend Mass, while one Reader is required for daily Mass. Qualifications for a Reader are a love of the Word of God, a pleasant speaking voice and reasonable comfort speaking before a crowd. Techniques can be learned, but a desire to proclaim the Word comes from within. Readers carefully study and practice the assigned reading prior to serving. Training is required.",
          leader: "Deacon Tony DeCotis",
          contact: "deacon@saintpeter.me, 850-581-2556"
        },
        {
          name: "Small Group Leader",
          description: "Small Groups follow Jesus' example of journeying through life and towards God together with a close group of fellow Christians. Leaders are trained in how to invite members and facililtate group discussions. Meeting times, locations, frequency, and topics/resources are flexible and vary depending on who is in the group, and the parish is able to assist in many of these areas. We are always in need of Small Group Leaders, so if this interests you, please prayerfully consider whether God is calling you to lead your parish community in this way.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Nursery/Childcare Volunteer",
          description: "We are always in need of volunteers to help in the Nursery on Sundays, and to help with Childcare for various parish events. Volunteers undergo a Diocesan background check and video training.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
      ],
      local: [],
    },
    {
      gift: 'Craftsmanship',
      score: 0,
      description: "To exercise the gift of craftsmanship one must have or develop a skill, be it a hobby or a vocation and must be willing to share this ability with others either in finished products or in teaching others the skill. This gift involves any art or craft or skill, from painting to pottery, to woodwork or weaving, computer skills or photography - any art or craft that can be used to the glory of God. Exodus 28:3-4, Jeremiah 18:1-6, Exodus 35:35",
      parish: [
        {
          name: "Parish Office Volunteer",
          description: "This ministry is for those who are able to serve the parish by helping out at the Office. Volunteers assist with clerical work and are trained to answer phone calls to the church.",
          leader: "Ana Livoti-Fails",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Weekend Church Prep",
          description: "This ministry is for those who are able to assist at one of our weekend Masses in preparing the church before Mass.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Altar Linen Cleaner",
          description: "Volunteers are needed to assist with regular cleaning, folding, and storage of Altar Linens.",
          leader: "Rose DeCotis",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Seasonal Decorating",
          description: "This ministry is for those who would like to help decorate the Church for different liturgical seasons and feasts (Christmas, Easter, Lent, Advent, etc.).",
          leader: "Ana Livoti-Fails",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Vacation Bible School (VBS) Volunteer",
          description: "Volunteers are needed to help with our annual summer VBS program. Opportunites for service include leading and teaching the program content and activities, serving as an aide to supervise children, making decorations to transform spaces and classrooms, and/or cleanup.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Grounds Beautification Ministry",
          description: "This ministry is for those who are able to help with planting, landscaping, and similar outdoor tasks to help keep our parish ground beautiful.",
          leader: "Alicia Graham",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Maintenance Volunteer",
          description: "We are always looking for volunteers with experience in painting, plumbing, carpentry, and similar repair/maintenance areas to help with various projects at the church.",
          leader: "John Fails",
          contact: "maintenance@saintpeter.me, 850-581-2556"
        },
      ],
      local: [
        {
          name: "Habitat For Humanity in Okaloosa County",
          description: "Habitat for Humanity Okaloosa County welcomes people from all walks of life to join them as they build affordable, safe homes in partnership with families in need. There are opportunities for Construction Volunteers, ReStore Volunteers, Special Event Volunteering and Youth Volunteers.",
          leader: "the Habitat For Humanity in Okaloosa County Volunteer Coordinator",
          contact: "volunteer@habitatfwb.org, 850-315-0025"
        }
      ],
    },
    {
      gift: 'Discernment',
      score: 0,
      description: "The Holy Spirit enables some of us to discover the will of God. To exercise the gift of discernment is to distinguish between truth and error, to identify whether something is of God. This gift involves wisdom and prayerfulness. Proverbs 17:24, Hosea 14:8-9, Acts 5:3-6",
      parish: [
        {
          name: "Extraordinary Minister of Holy Communion (EMHC)",
          description: "Extraordinary Ministers of Holy Communion are trained to assist the priest in the distribution of Holy Communion at Mass under extraordinary circumstances, and to bring communion to the sick or aged.",
          leader: "Father Doug Martin",
          contact: "pastor@saintpeter.me, 850-581-2556"
        },
        {
          name: "Outreach to Parish Homebound/Elderly",
          description: "This ministry is for those who to assist, talk with, and pray with the homebound and elderly in our parish.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Small Group Leader",
          description: "Small Groups follow Jesus' example of journeying through life and towards God together with a close group of fellow Christians. Leaders are trained in how to invite members and facililtate group discussions. Meeting times, locations, frequency, and topics/resources are flexible and vary depending on who is in the group, and the parish is able to assist in many of these areas. We are always in need of Small Group Leaders, so if this interests you, please prayerfully consider whether God is calling you to lead your parish community in this way.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        }
      ],
      local: [],
    },
    {
      gift: 'Evangelization',
      score: 0,
      description: "The Holy Spirit enables individuals to share the Gospel with others in such a way that they come to know God. To exercise the gift of evangelism is to share one’s faith within and beyond the parish. This gift involves an unabashed willingness to share the Good News and one’s personal faith journey. Acts 8:26-40, 2 Timothy 4:5",
      parish: [
        {
          name: "Elementary Faith Formation - Catechist, Aide, Teen Aide, Catechist Substitute",
          description: "Volunteers are needed to share their gift of faith with the children of our parish (VPK through 5th grade) during the school year. Classes meet on Sundays, from 9:15-10:15 a.m. Catechists plan and lead lessons, and are supported in the classroom by Aides and Teen Aides. In addition to these three positions, there is a need for Catechist Substitutes to fill in as needed.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Adult Faith Formation",
          description: "Those with a passion for teaching other adults about the Catholic faith are encouraged to get involved with planning and leading our Adult Faith Formation sessions on Sundays.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Middle School Adult Ministry Team",
          description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our middle schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
          leader: "Amanda Martin",
          contact: "amartin@okaloosapa.com, 850-581-2556"
        },
        {
          name: "High School Adult Ministry Team",
          description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our high schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Small Group Leader",
          description: "Small Groups follow Jesus' example of journeying through life and towards God together with a close group of fellow Christians. Leaders are trained in how to invite members and facililtate group discussions. Meeting times, locations, frequency, and topics/resources are flexible and vary depending on who is in the group, and the parish is able to assist in many of these areas. We are always in need of Small Group Leaders, so if this interests you, please prayerfully consider whether God is calling you to lead your parish community in this way.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Young Adult Ministry",
          description: "Volunteers and leaders in this ministry help with scheduling, organizing, promoting, and running Young Adult Ministry activities and events. According to the United States Conference of Catholic Bishops, \"Young adults are persons in their late teens, twenties, and thirties who represent diverse cultural, racial, ethnic, educational, vocational, social, political, and spiritual backgrounds. They are college students, workers, and professionals; they are persons in military service; they are single, married, divorced, or widowed; they are with or without children; they are newcomers in search of a better life.\"",
          leader: "Tyler Acosta",
          contact: "music@saintpeter.me, 850-581-2556"
        },
        {
          name: "Order of Christian Initiation for Adults (OCIA) Sponsor",
          description: "A sponsor is an active Catholic that is willing to be a companion to an OCIA student as they go through the process of becoming Catholic. Sponsors attend class with students, meet or talk with them to answer questions and walk with them on their journey of faith.",
          leader: "Tom Lehmann",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Order of Christian Initiation for Adults (OCIA) Catechist Team",
          description: "Those who are knowledgable in their faith and who are interested in sharing Jesus with those who are considering becoming Catholic are encouraged to join the OCIA Catechist Team. Catechists assist in planning and teaching weekly lessons.",
          leader: "Tom Lehmann",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Extraordinary Minister of Holy Communion (EMHC)",
          description: "Extraordinary Ministers of Holy Communion are trained to assist the priest in the distribution of Holy Communion at Mass under extraordinary circumstances, and to bring communion to the sick or aged.",
          leader: "Father Doug Martin",
          contact: "pastor@saintpeter.me, 850-581-2556"
        },
        {
          name: "Reader",
          description: "Readers proclaim the living Word of God at Mass and lead the General Intercessions when the deacon is not present. A team of two ministers proclaim Holy Scripture at each weekend Mass, while one Reader is required for daily Mass. Qualifications for a Reader are a love of the Word of God, a pleasant speaking voice and reasonable comfort speaking before a crowd. Techniques can be learned, but a desire to proclaim the Word comes from within. Readers carefully study and practice the assigned reading prior to serving. Training is required.",
          leader: "Deacon Tony DeCotis",
          contact: "deacon@saintpeter.me, 850-581-2556"
        },
        {
          name: "St. Paul Street Evangelization",
          description: "St. Paul Street Evangelization is an organization that equips Catholics to evangelize at local events. Their simple, non-confrontational method involves praying with people and handing out Rosaries. Anyone in the parish is welcome to join the parish Street Team: men, women, and families can all get involved.",
          leader: "Tyler Acosta",
          contact: "music@saintpeter.me, 850-581-2556"
        }
      ],
      local: [
        {
          name: "Prison Ministry",
          description: "This ministry answers Jesus' call to visit the imprisoned, and involves being available to talk and pray with the inmates. Volunteers undergo a background check and similar screening through the Okaloosa County Prison System.",
          leader: "Deacon Tony DeCotis",
          contact: "deacon@saintpeter.me, 850-581-2556"
        }
      ],
    },
    {
      gift: 'Encouragement',
      score: 0,
      description: "Empowered by the Holy Spirit, some persons are called to stand beside other people who are in need and bring comfort, counsel and encouragement so they feel helped. To exercise the gift of encouragement is to call forth the best from others. This gift involves helping others to be more dedicated in living out their faith, bolstering them up when they are discouraged or downhearted and challenging them to see the goals to which God calls them. Acts 11:23-24, Acts 14:21-22",
      parish: [
        {
          name: "Elementary Faith Formation - Catechist, Aide, Teen Aide, Catechist Substitute",
          description: "Volunteers are needed to share their gift of faith with the children of our parish (VPK through 5th grade) during the school year. Classes meet on Sundays, from 9:15-10:15 a.m. Catechists plan and lead lessons, and are supported in the classroom by Aides and Teen Aides. In addition to these three positions, there is a need for Catechist Substitutes to fill in as needed.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Small Group Leader",
          description: "Small Groups follow Jesus' example of journeying through life and towards God together with a close group of fellow Christians. Leaders are trained in how to invite members and facililtate group discussions. Meeting times, locations, frequency, and topics/resources are flexible and vary depending on who is in the group, and the parish is able to assist in many of these areas. We are always in need of Small Group Leaders, so if this interests you, please prayerfully consider whether God is calling you to lead your parish community in this way.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Young Adult Ministry",
          description: "Volunteers and leaders in this ministry help with scheduling, organizing, promoting, and running Young Adult Ministry activities and events. According to the United States Conference of Catholic Bishops, \"Young adults are persons in their late teens, twenties, and thirties who represent diverse cultural, racial, ethnic, educational, vocational, social, political, and spiritual backgrounds. They are college students, workers, and professionals; they are persons in military service; they are single, married, divorced, or widowed; they are with or without children; they are newcomers in search of a better life.\"",
          leader: "Tyler Acosta",
          contact: "music@saintpeter.me, 850-581-2556"
        },
        {
          name: "Middle School Adult Ministry Team",
          description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our middle schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
          leader: "Amanda Martin",
          contact: "amartin@okaloosapa.com, 850-581-2556"
        },
        {
          name: "High School Adult Ministry Team",
          description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our high schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Extraordinary Minister of Holy Communion (EMHC)",
          description: "Extraordinary Ministers of Holy Communion are trained to assist the priest in the distribution of Holy Communion at Mass under extraordinary circumstances, and to bring communion to the sick or aged.",
          leader: "Father Doug Martin",
          contact: "pastor@saintpeter.me, 850-581-2556"
        },
        {
          name: "Outreach to Parish Homebound/Elderly",
          description: "This ministry is for those who to assist, talk with, and pray with the homebound and elderly in our parish.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Nursery/Childcare Volunteer",
          description: "We are always in need of volunteers to help in the Nursery on Sundays, and to help with Childcare for various parish events. Volunteers undergo a Diocesan background check and video training.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        }
      ],
      local: [
        {
          name: "Fort Walton Beach Center for Women",
          description: "The Fort Walton Beach Center for Women provides free and confidential services and information to pregnant women in Okaloosa County, and has various volunteer opportunities available for those who desire to share in this mission. Clients are served without regard to age, race, income, nationality, religious affiliation, disability or other arbitrary circumstances.",
          leader: "the Fort Walton Beach Center for Women",
          contact: "850-862-9020 between 9am and 12pm on Mondays and Wednesdays"
        },
        {
          name: "Pregnancy Resource Center of Navarre",
          description: "The Pregnancy Resource Center of Navarre provides free and confidential services and information to pregnant women in the Emerald Coast. Clients are served without regard to age, race, income, nationality, religious affiliation, disability or other arbitrary circumstances. Volunteers with skills in standard office software (Microsoft Word, Excel, etc.) are always needed to help with office work, as well as volunteers to help manage the organization's social media. Adult women (early 20s and up) with a passion for helping pregnant mothers in need are encouraged to become Client Advocates, who are trained to talk with and assist clients.",
          leader: "the Pregnancy Resource Center of Navarre",
          contact: "850-515-0334"
        },
        {
          name: "Opportunity Place",
          description: "Opportunity Place provides safe shelter, supportive services, and resources for the chronically homeless and for those experiencing homelessness due to a negative event or situation that occurred in their lives. Opportunity Place hosts Youth Nights every Tuesday and Thursday night from 5:30pm to 7pm, where volunteers come in and engage in activities with the children in the shelter. Friday morning volunteers are needed to answer the phone with shelter support. Volunteers fill out an application and are then added to a newsletter with information on new volunteer opportunities.",
          leader: "Opportunity Place",
          contact: "info@opifwb.org, 850-659-3190"
        },
        {
          name: "Shelter House",
          description: "Shelter House provides shelter, intervention and primary prevention programs to the community through education, awareness and advocating for social change. Volunteers that wish to work closely with participants or work on the 24-hour hotline are required to attend a 30-hour Core Competency Training. This is a 24-hour class (three full days) in addition to six hours of observation. Volunteers on the Rape Response Team (RRT) must complete Advocacy Core Training, which includes self-led online training, role playing and on-the-job training. For those not interested in direct service, opportunities include sorting through donations, collecting cell phones in the community, promoting and working events and fundraisers, handing out brochures and flyers, picking up donations, assisting with administrative duties, and much more. Opportunities for groups are also available. Your business, religious organization, youth group or other organization can work together for a group project.",
          leader: "the Shelter House Volunteer Coordinator",
          contact: "volunteer@shelterhousenwfl.org, 850-243-1201"
        }
      ],
    },
    {
      gift: 'Faith',
      score: 0,
      description: "The Holy Spirit provides individuals with extraordinary confidence in God’s promises, power, and presence so that they can take heroic stands for the future of God’s work in the church and faith community. This gift involves a healthy prayer life, sensitivity to the will of God and a firm trust that God will come through, even when there is no concrete evidence. Hebrews 11",
      parish: [
        {
          name: "Reader",
          description: "Readers proclaim the living Word of God at Mass and lead the General Intercessions when the deacon is not present. A team of two ministers proclaim Holy Scripture at each weekend Mass, while one Reader is required for daily Mass. Qualifications for a Reader are a love of the Word of God, a pleasant speaking voice and reasonable comfort speaking before a crowd. Techniques can be learned, but a desire to proclaim the Word comes from within. Readers carefully study and practice the assigned reading prior to serving. Training is required.",
          leader: "Deacon Tony DeCotis",
          contact: "deacon@saintpeter.me, 850-581-2556"
        },
        {
          name: "Small Group Leader",
          description: "Small Groups follow Jesus' example of journeying through life and towards God together with a close group of fellow Christians. Leaders are trained in how to invite members and facililtate group discussions. Meeting times, locations, frequency, and topics/resources are flexible and vary depending on who is in the group, and the parish is able to assist in many of these areas. We are always in need of Small Group Leaders, so if this interests you, please prayerfully consider whether God is calling you to lead your parish community in this way.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Elementary Faith Formation - Catechist, Aide, Teen Aide, Catechist Substitute",
          description: "Volunteers are needed to share their gift of faith with the children of our parish (VPK through 5th grade) during the school year. Classes meet on Sundays, from 9:15-10:15 a.m. Catechists plan and lead lessons, and are supported in the classroom by Aides and Teen Aides. In addition to these three positions, there is a need for Catechist Substitutes to fill in as needed.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Adult Faith Formation",
          description: "Those with a passion for teaching other adults about the Catholic faith are encouraged to get involved with planning and leading our Adult Faith Formation sessions on Sundays.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Vacation Bible School (VBS) Volunteer",
          description: "Volunteers are needed to help with our annual summer VBS program. Opportunites for service include leading and teaching the program content and activities, serving as an aide to supervise children, making decorations to transform spaces and classrooms, and/or cleanup.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Prayer Chain",
          description: "The Prayer Chain is for those who wish to receive emails about urgent prayer needs in the parish so that they can pray for those in great need.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        }
      ],
      local: [
        {
          name: "Fort Walton Beach Center for Women",
          description: "The Fort Walton Beach Center for Women provides free and confidential services and information to pregnant women in Okaloosa County, and has various volunteer opportunities available for those who desire to share in this mission. Clients are served without regard to age, race, income, nationality, religious affiliation, disability or other arbitrary circumstances.",
          leader: "the Fort Walton Beach Center for Women",
          contact: "850-862-9020 between 9am and 12pm on Mondays and Wednesdays"
        },
        {
          name: "Pregnancy Resource Center of Navarre",
          description: "The Pregnancy Resource Center of Navarre provides free and confidential services and information to pregnant women in the Emerald Coast. Clients are served without regard to age, race, income, nationality, religious affiliation, disability or other arbitrary circumstances. Volunteers with skills in standard office software (Microsoft Word, Excel, etc.) are always needed to help with office work, as well as volunteers to help manage the organization's social media. Adult women (early 20s and up) with a passion for helping pregnant mothers in need are encouraged to become Client Advocates, who are trained to talk with and assist clients.",
          leader: "the Pregnancy Resource Center of Navarre",
          contact: "850-515-0334"
        },
        {
          name: "Opportunity Place",
          description: "Opportunity Place provides safe shelter, supportive services, and resources for the chronically homeless and for those experiencing homelessness due to a negative event or situation that occurred in their lives. Opportunity Place hosts Youth Nights every Tuesday and Thursday night from 5:30pm to 7pm, where volunteers come in and engage in activities with the children in the shelter. Friday morning volunteers are needed to answer the phone with shelter support. Volunteers fill out an application and are then added to a newsletter with information on new volunteer opportunities.",
          leader: "Opportunity Place",
          contact: "info@opifwb.org, 850-659-3190"
        },
        {
          name: "Shelter House",
          description: "Shelter House provides shelter, intervention and primary prevention programs to the community through education, awareness and advocating for social change. Volunteers that wish to work closely with participants or work on the 24-hour hotline are required to attend a 30-hour Core Competency Training. This is a 24-hour class (three full days) in addition to six hours of observation. Volunteers on the Rape Response Team (RRT) must complete Advocacy Core Training, which includes self-led online training, role playing and on-the-job training. For those not interested in direct service, opportunities include sorting through donations, collecting cell phones in the community, promoting and working events and fundraisers, handing out brochures and flyers, picking up donations, assisting with administrative duties, and much more. Opportunities for groups are also available. Your business, religious organization, youth group or other organization can work together for a group project.",
          leader: "the Shelter House Volunteer Coordinator",
          contact: "volunteer@shelterhousenwfl.org, 850-243-1201"
        },
        {
          name: "Catholic Charities of Northwest Florida",
          description: "Catholic Charities of Northwest Florida serves, empowers, and advocates for impoverished and vulnerable families and individuals of any race, religion or national origin across the Florida Panhandle. Volunteers are needed to help at the Food Pantry, which operates from 9am-12pm Mondays through Thursdays, and to help distribute lunches from 12:30-4pm, also Mondays through Thursdays. Volunteers are also needed to help in the office with administrative tasks. These opportunites are generally for adults, but families with children may also be able to assist.",
          leader: "Catholic Charities of Northwest Florida's Fort Walton Beach Office",
          contact: "850-244-2825"
        },
        {
          name: "St. Paul Street Evangelization",
          description: "St. Paul Street Evangelization is an organization that equips Catholics to evangelize at local events. Their simple, non-confrontational method involves praying with people and handing out Rosaries. Anyone in the parish is welcome to join the parish Street Team: men, women, and families can all get involved.",
          leader: "Tyler Acosta",
          contact: "music@saintpeter.me, 850-581-2556"
        }
      ],
    },
    {
      gift: 'Generosity',
      score: 0,
      description: "The Holy Spirit enables people to offer energies, abilities and material resources for the work of the church with exceptional willingness, cheerfulness and generosity. To exercise the gift of giving one operates out of a spirit of selflessness, requiring no recognition or reward for their giving. This gift involves offering one’s time, talent and treasure. 2 Corinthians 8:1-5, Matthew 6:1-4",
      parish: [
        {
          name: "Extraordinary Minister of Holy Communion (EMHC)",
          description: "Extraordinary Ministers of Holy Communion are trained to assist the priest in the distribution of Holy Communion at Mass under extraordinary circumstances, and to bring communion to the sick or aged.",
          leader: "Father Doug Martin",
          contact: "pastor@saintpeter.me, 850-581-2556"
        },
        {
          name: "Outreach to Parish Homebound/Elderly",
          description: "This ministry is for those who to assist, talk with, and pray with the homebound and elderly in our parish.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Knights of Columbus Council 8910",
          description: "The Knights of Columbus is a brotherhood of Catholic men 18 years of age and older who each play a part in improving the community. We stand together in faith, and are dedicated to upholding the principles of charity, unity, fraternity and patriotism while lending support and strength to our parish, home, community, and fellow Knights. Activities at St. Peter include planning and assisting at fundraisers, including Pancake Breakfasts and Lenten Fish Fries.",
          leader: "Jason Heidbreder",
          contact: "jasonheidbreder@yahoo.com, 850-581-2556"
        },
        {
          name: "Order of Christian Initiation for Adults (OCIA) Sponsor",
          description: "A sponsor is an active Catholic that is willing to be a companion to an OCIA student as they go through the process of becoming Catholic. Sponsors attend class with students, meet or talk with them to answer questions and walk with them on their journey of faith.",
          leader: "Tom Lehmann",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Lazarus Ministry",
          description: "This ministry assists with setting up for funeral receptions to help comfort those who are mourning.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Nursery/Childcare Volunteer",
          description: "We are always in need of volunteers to help in the Nursery on Sundays, and to help with Childcare for various parish events. Volunteers undergo a Diocesan background check and video training.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Parish Dinners",
          description: "This ministry assists with planning, setting up for, and cleaning up after dinner events and parish potlucks.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Youth Night Kitchen Team",
          description: "The Youth Night Kitchen Team meets on Sunday afternoons before Youth Nights to cook dinner for the attendees.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Sacristan",
          description: "Sacristans prepare the sanctuary for the celebration of one Mass on weekends and Holy Days of Obligation. They work quietly behind-the-scenes to ensure that liturgies run smoothly, preparing the sacred vessels needed for liturgy, and cleaning and putting away all items afterwards. They also make sure all the other liturgical ministries are covered by those scheduled, or find substitutes. Screening and training is required.",
          leader: "Rose DeCotis",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Altar Server",
          description: "This ministry assists in the liturgical life of the parish during weekend Masses. Serving instills a sense of responsibility to the church and also enhances a personal relationship with Jesus as our youth take part in the Mass in such an intimate way. This ministry is open to anyone who has received the Sacraments of Baptism and First Holy Communion and is able to carry out all of the duties required. You will be trained in the duties and responsibilities of the ministry and will be asked to arrive 20 minutes before Mass begins.",
          leader: "Deacon Tony DeCotis",
          contact: "deacon@saintpeter.me, 850-581-2556"
        },
        {
          name: "Coffee and Donuts Ministry",
          description: "Volunteers are needed to help pick up donuts, brew coffee, set up tables, serve Coffee and Donuts, and clean up afterwards, which involves some work before and after one of our Sunday Masses.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Altar Linen Cleaner",
          description: "Volunteers are needed to assist with regular cleaning, folding, and storage of Altar Linens.",
          leader: "Rose DeCotis",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Seasonal Decorating",
          description: "This ministry is for those who would like to help decorate the Church for different liturgical seasons and feasts (Christmas, Easter, Lent, Advent, etc.).",
          leader: "Ana Livoti-Fails",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "St. Paul Street Evangelization",
          description: "St. Paul Street Evangelization is an organization that equips Catholics to evangelize at local events. Their simple, non-confrontational method involves praying with people and handing out Rosaries. Anyone in the parish is welcome to join the parish Street Team: men, women, and families can all get involved.",
          leader: "Tyler Acosta",
          contact: "music@saintpeter.me, 850-581-2556"
        },
        {
          name: "Vacation Bible School (VBS) Volunteer",
          description: "Volunteers are needed to help with our annual summer VBS program. Opportunites for service include leading and teaching the program content and activities, serving as an aide to supervise children, making decorations to transform spaces and classrooms, and/or cleanup.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Grounds Beautification Ministry",
          description: "This ministry is for those who are able to help with planting, landscaping, and similar outdoor tasks to help keep our parish ground beautiful.",
          leader: "Alicia Graham",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Maintenance Volunteer",
          description: "We are always looking for volunteers with experience in painting, plumbing, carpentry, and similar repair/maintenance areas to help with various projects at the church.",
          leader: "John Fails",
          contact: "maintenance@saintpeter.me, 850-581-2556"
        },
        {
          name: "Parish Library Volunteer",
          description: "Library Volunteers maintain the Parish Library, process book donations, and assist parishioners with checking out physical and digital materials.",
          leader: "Judy Holzschuh",
          contact: "library@saintpeter.me, 850-581-2556"
        },
        {
          name: "Stewardship Committee",
          description: "This committee assists in communicating the parish's vision for stewardship throughout the parish, and organizes the annual Ministry Fair.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Parish Office Volunteer",
          description: "This ministry is for those who are able to serve the parish by helping out at the Office. Volunteers assist with clerical work and are trained to answer phone calls to the church.",
          leader: "Ana Livoti-Fails",
          contact: "office@saintpeter.me, 850-581-2556"
        }
      ],
      local: [
        {
          name: "Food For Thought",
          description: "Food For Thought is the go-to organization for fighting childhood hunger in Walton and Okaloosa Counties. Opportunities are available for volunteers of all ages. Every Tuesday, volunteers can assist with packing food in Destin (908 Airport Rd, Destin, FL 32541) and Santa Rosa Beach (132 Market St, Santa Rosa Beach, FL 32459). Every Wednesday, volunteers can assist with curbside service, mornings and/or evenings. Volunteers must complete paperwork and in-person training to get started.",
          leader: "Food For Thought",
          contact: "volunteer@fftfl.org, 850-290-4056"
        },
        {
          name: "Fort Walton Beach Center for Women",
          description: "The Fort Walton Beach Center for Women provides free and confidential services and information to pregnant women in Okaloosa County, and has various volunteer opportunities available for those who desire to share in this mission. Clients are served without regard to age, race, income, nationality, religious affiliation, disability or other arbitrary circumstances.",
          leader: "the Fort Walton Beach Center for Women",
          contact: "850-862-9020 between 9am and 12pm on Mondays and Wednesdays"
        },
        {
          name: "Pregnancy Resource Center of Navarre",
          description: "The Pregnancy Resource Center of Navarre provides free and confidential services and information to pregnant women in the Emerald Coast. Clients are served without regard to age, race, income, nationality, religious affiliation, disability or other arbitrary circumstances. Volunteers with skills in standard office software (Microsoft Word, Excel, etc.) are always needed to help with office work, as well as volunteers to help manage the organization's social media. Adult women (early 20s and up) with a passion for helping pregnant mothers in need are encouraged to become Client Advocates, who are trained to talk with and assist clients.",
          leader: "the Pregnancy Resource Center of Navarre",
          contact: "850-515-0334"
        },
        {
          name: "Opportunity Place",
          description: "Opportunity Place provides safe shelter, supportive services, and resources for the chronically homeless and for those experiencing homelessness due to a negative event or situation that occurred in their lives. Opportunity Place hosts Youth Nights every Tuesday and Thursday night from 5:30pm to 7pm, where volunteers come in and engage in activities with the children in the shelter. Friday morning volunteers are needed to answer the phone with shelter support. Volunteers fill out an application and are then added to a newsletter with information on new volunteer opportunities.",
          leader: "Opportunity Place",
          contact: "info@opifwb.org, 850-659-3190"
        },
        {
          name: "Shelter House",
          description: "Shelter House provides shelter, intervention and primary prevention programs to the community through education, awareness and advocating for social change. Volunteers that wish to work closely with participants or work on the 24-hour hotline are required to attend a 30-hour Core Competency Training. This is a 24-hour class (three full days) in addition to six hours of observation. Volunteers on the Rape Response Team (RRT) must complete Advocacy Core Training, which includes self-led online training, role playing and on-the-job training. For those not interested in direct service, opportunities include sorting through donations, collecting cell phones in the community, promoting and working events and fundraisers, handing out brochures and flyers, picking up donations, assisting with administrative duties, and much more. Opportunities for groups are also available. Your business, religious organization, youth group or other organization can work together for a group project.",
          leader: "the Shelter House Volunteer Coordinator",
          contact: "volunteer@shelterhousenwfl.org, 850-243-1201"
        },
        {
          name: "Catholic Charities of Northwest Florida",
          description: "Catholic Charities of Northwest Florida serves, empowers, and advocates for impoverished and vulnerable families and individuals of any race, religion or national origin across the Florida Panhandle. Volunteers are needed to help at the Food Pantry, which operates from 9am-12pm Mondays through Thursdays, and to help distribute lunches from 12:30-4pm, also Mondays through Thursdays. Volunteers are also needed to help in the office with administrative tasks. These opportunites are generally for adults, but families with children may also be able to assist.",
          leader: "Catholic Charities of Northwest Florida's Fort Walton Beach Office",
          contact: "850-244-2825"
        },
        {
          name: "Habitat For Humanity in Okaloosa County",
          description: "Habitat for Humanity Okaloosa County welcomes people from all walks of life to join them as they build affordable, safe homes in partnership with families in need. There are opportunities for Construction Volunteers, ReStore Volunteers, Special Event Volunteering and Youth Volunteers.",
          leader: "the Habitat For Humanity in Okaloosa County Volunteer Coordinator",
          contact: "volunteer@habitatfwb.org, 850-315-0025"
        },
        {
          name: "Prison Ministry",
          description: "This ministry answers Jesus' call to visit the imprisoned, and involves being available to talk and pray with the inmates. Volunteers undergo a background check and similar screening through the Okaloosa County Prison System.",
          leader: "Deacon Tony DeCotis",
          contact: "deacon@saintpeter.me, 850-581-2556"
        }
      ],
    },
    {
      gift: 'Healing',
      score: 0,
      description: "The Holy Spirit leads some individuals to aid in restoring people who are sick. To exercise the gift of healing is to pray not necessarily for a cure but for God’s help for the sufferer, that something of good may come out of the distress. This gift involves a healthy prayer life, confidence in God’s power to provide courage in suffering, and wellness of spirit regardless of the condition of the body or mind. James 5:13-16, Luke 9:1-2 , 2 Kings 5:1-3, 9-14",
      parish: [
        {
          name: "Lazarus Ministry",
          description: "This ministry assists with setting up for funeral receptions to help comfort those who are mourning.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Extraordinary Minister of Holy Communion (EMHC)",
          description: "Extraordinary Ministers of Holy Communion are trained to assist the priest in the distribution of Holy Communion at Mass under extraordinary circumstances, and to bring communion to the sick or aged.",
          leader: "Father Doug Martin",
          contact: "pastor@saintpeter.me, 850-581-2556"
        },
        {
          name: "Outreach to Parish Homebound/Elderly",
          description: "This ministry is for those who to assist, talk with, and pray with the homebound and elderly in our parish.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Prayer Chain",
          description: "The Prayer Chain is for those who wish to receive emails about urgent prayer needs in the parish so that they can pray for those in great need.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        }
      ],
      local: [],
    },
    {
      gift: 'Hospitality',
      score: 0,
      description: "A concern for the comfort of others may be a manifestation of the gift of hospitality. This gift involves having a knack for making people at ease, enjoying being in the presence of strangers and a welcoming spirit. Hebrews 13:1-2, Genesis 18:1-8",
      parish: [
        {
          name: "Order of Christian Initiation for Adults (OCIA) Sponsor",
          description: "A sponsor is an active Catholic that is willing to be a companion to an OCIA student as they go through the process of becoming Catholic. Sponsors attend class with students, meet or talk with them to answer questions and walk with them on their journey of faith.",
          leader: "Tom Lehmann",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Usher/Greeter",
          description: "Ushers greet parishioners and open the doors for the weekend Masses. They also assist with seating, collecting the offertory, handing out bulletins and straightening up the pews after Mass. Greeters make the first experience of our parish a positive one with a warm welcome and a friendly smile. This ministry provides a link to what is happening in the parish community by being available before and after the Mass to answer questions and share current events.",
          leader: "Tere Brenci",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Youth Night Kitchen Team",
          description: "The Youth Night Kitchen Team meets on Sunday afternoons before Youth Nights to cook dinner for the attendees.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Nursery/Childcare Volunteer",
          description: "We are always in need of volunteers to help in the Nursery on Sundays, and to help with Childcare for various parish events. Volunteers undergo a Diocesan background check and video training.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Elementary Faith Formation - Catechist, Aide, Teen Aide, Catechist Substitute",
          description: "Volunteers are needed to share their gift of faith with the children of our parish (VPK through 5th grade) during the school year. Classes meet on Sundays, from 9:15-10:15 a.m. Catechists plan and lead lessons, and are supported in the classroom by Aides and Teen Aides. In addition to these three positions, there is a need for Catechist Substitutes to fill in as needed.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Middle School Adult Ministry Team",
          description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our middle schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
          leader: "Amanda Martin",
          contact: "amartin@okaloosapa.com, 850-581-2556"
        },
        {
          name: "High School Adult Ministry Team",
          description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our high schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Lazarus Ministry",
          description: "This ministry assists with setting up for funeral receptions to help comfort those who are mourning.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Parish Dinners",
          description: "This ministry assists with planning, setting up for, and cleaning up after dinner events and parish potlucks.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Coffee and Donuts Ministry",
          description: "Volunteers are needed to help pick up donuts, brew coffee, set up tables, serve Coffee and Donuts, and clean up afterwards, which involves some work before and after one of our Sunday Masses.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Young Adult Ministry",
          description: "Volunteers and leaders in this ministry help with scheduling, organizing, promoting, and running Young Adult Ministry activities and events. According to the United States Conference of Catholic Bishops, \"Young adults are persons in their late teens, twenties, and thirties who represent diverse cultural, racial, ethnic, educational, vocational, social, political, and spiritual backgrounds. They are college students, workers, and professionals; they are persons in military service; they are single, married, divorced, or widowed; they are with or without children; they are newcomers in search of a better life.\"",
          leader: "Tyler Acosta",
          contact: "music@saintpeter.me, 850-581-2556"
        },
        {
          name: "Small Group Leader",
          description: "Small Groups follow Jesus' example of journeying through life and towards God together with a close group of fellow Christians. Leaders are trained in how to invite members and facililtate group discussions. Meeting times, locations, frequency, and topics/resources are flexible and vary depending on who is in the group, and the parish is able to assist in many of these areas. We are always in need of Small Group Leaders, so if this interests you, please prayerfully consider whether God is calling you to lead your parish community in this way.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
      ],
      local: [],
    },
    {
      gift: 'Intercession',
      score: 0,
      description: "Evidence of the gift of intercession includes having the mindset for being instantly in prayer for a person or situation, having confidence that God acts in response to our prayers, being patient and persistent in prayer even when change is not evident and having a continuing sense of responsibility to pray for people and situations. 1 Thessalonians 3:10-13, 1 Timothy 2:1-2",
      parish: [
        {
          name: "Reader",
          description: "Readers proclaim the living Word of God at Mass and lead the General Intercessions when the deacon is not present. A team of two ministers proclaim Holy Scripture at each weekend Mass, while one Reader is required for daily Mass. Qualifications for a Reader are a love of the Word of God, a pleasant speaking voice and reasonable comfort speaking before a crowd. Techniques can be learned, but a desire to proclaim the Word comes from within. Readers carefully study and practice the assigned reading prior to serving. Training is required.",
          leader: "Deacon Tony DeCotis",
          contact: "deacon@saintpeter.me, 850-581-2556"
        },
        {
          name: "Small Group Leader",
          description: "Small Groups follow Jesus' example of journeying through life and towards God together with a close group of fellow Christians. Leaders are trained in how to invite members and facililtate group discussions. Meeting times, locations, frequency, and topics/resources are flexible and vary depending on who is in the group, and the parish is able to assist in many of these areas. We are always in need of Small Group Leaders, so if this interests you, please prayerfully consider whether God is calling you to lead your parish community in this way.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Prayer Chain",
          description: "The Prayer Chain is for those who wish to receive emails about urgent prayer needs in the parish so that they can pray for those in great need.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Extraordinary Minister of Holy Communion (EMHC)",
          description: "Extraordinary Ministers of Holy Communion are trained to assist the priest in the distribution of Holy Communion at Mass under extraordinary circumstances, and to bring communion to the sick or aged.",
          leader: "Father Doug Martin",
          contact: "pastor@saintpeter.me, 850-581-2556"
        },
        {
          name: "Prayer Chain",
          description: "The Prayer Chain is for those who wish to receive emails about urgent prayer needs in the parish so that they can pray for those in great need.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        }
      ],
      local: [
        {
          name: "Prison Ministry",
          description: "This ministry answers Jesus' call to visit the imprisoned, and involves being available to talk and pray with the inmates. Volunteers undergo a background check and similar screening through the Okaloosa County Prison System.",
          leader: "Deacon Tony DeCotis",
          contact: "deacon@saintpeter.me, 850-581-2556"
        }
      ],
    },
    {
      gift: 'Knowledge',
      score: 0,
      description: "One who exercises the gift of knowledge enjoys learning, probably from childhood and on into adulthood. This gift may include knowledge of facts and relationships, of scripture and of the tradition of the church and knowledge of the ways of sharing this learning gracefully. Ephesians 3:14-19, Hosea 6:6",
      parish: [
        {
          name: "Order of Christian Initiation for Adults (OCIA) Sponsor",
          description: "A sponsor is an active Catholic that is willing to be a companion to an OCIA student as they go through the process of becoming Catholic. Sponsors attend class with students, meet or talk with them to answer questions and walk with them on their journey of faith.",
          leader: "Tom Lehmann",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Order of Christian Initiation for Adults (OCIA) Catechist Team",
          description: "Those who are knowledgable in their faith and who are interested in sharing Jesus with those who are considering becoming Catholic are encouraged to join the OCIA Catechist Team. Catechists assist in planning and teaching weekly lessons.",
          leader: "Tom Lehmann",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Elementary Faith Formation - Catechist, Aide, Teen Aide, Catechist Substitute",
          description: "Volunteers are needed to share their gift of faith with the children of our parish (VPK through 5th grade) during the school year. Classes meet on Sundays, from 9:15-10:15 a.m. Catechists plan and lead lessons, and are supported in the classroom by Aides and Teen Aides. In addition to these three positions, there is a need for Catechist Substitutes to fill in as needed.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Adult Faith Formation",
          description: "Those with a passion for teaching other adults about the Catholic faith are encouraged to get involved with planning and leading our Adult Faith Formation sessions on Sundays.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Small Group Leader",
          description: "Small Groups follow Jesus' example of journeying through life and towards God together with a close group of fellow Christians. Leaders are trained in how to invite members and facililtate group discussions. Meeting times, locations, frequency, and topics/resources are flexible and vary depending on who is in the group, and the parish is able to assist in many of these areas. We are always in need of Small Group Leaders, so if this interests you, please prayerfully consider whether God is calling you to lead your parish community in this way.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Middle School Adult Ministry Team",
          description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our middle schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
          leader: "Amanda Martin",
          contact: "amartin@okaloosapa.com, 850-581-2556"
        },
        {
          name: "High School Adult Ministry Team",
          description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our high schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Young Adult Ministry",
          description: "Volunteers and leaders in this ministry help with scheduling, organizing, promoting, and running Young Adult Ministry activities and events. According to the United States Conference of Catholic Bishops, \"Young adults are persons in their late teens, twenties, and thirties who represent diverse cultural, racial, ethnic, educational, vocational, social, political, and spiritual backgrounds. They are college students, workers, and professionals; they are persons in military service; they are single, married, divorced, or widowed; they are with or without children; they are newcomers in search of a better life.\"",
          leader: "Tyler Acosta",
          contact: "music@saintpeter.me, 850-581-2556"
        },
        {
          name: "Parish Library Volunteer",
          description: "Library Volunteers maintain the Parish Library, process book donations, and assist parishioners with checking out physical and digital materials.",
          leader: "Judy Holzschuh",
          contact: "library@saintpeter.me, 850-581-2556"
        }
      ],
      local: [],
    },
    {
      gift: 'Mercy',
      score: 0,
      description: "The Holy Spirit provides some individuals with exceptional empathy and compassion for those who are weak or suffering so that they can devote large amounts of time and energy to alleviate these conditions. To exercise the gift of mercy is to relate to others in kindness and compassion. This gift involves continual readiness to forgive those who have erred, comfort the bereaved, help those who face a crisis, minister to the sick, become a peacemaker or offer assistance to those in need. Luke 10:30-37, Micah 6:8",
      parish: [
        {
          name: "Outreach to Parish Homebound/Elderly",
          description: "This ministry is for those who to assist, talk with, and pray with the homebound and elderly in our parish.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Lazarus Ministry",
          description: "This ministry assists with setting up for funeral receptions to help comfort those who are mourning.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Extraordinary Minister of Holy Communion (EMHC)",
          description: "Extraordinary Ministers of Holy Communion are trained to assist the priest in the distribution of Holy Communion at Mass under extraordinary circumstances, and to bring communion to the sick or aged.",
          leader: "Father Doug Martin",
          contact: "pastor@saintpeter.me, 850-581-2556"
        }
      ],
      local: [
        {
          name: "Food For Thought",
          description: "Food For Thought is the go-to organization for fighting childhood hunger in Walton and Okaloosa Counties. Opportunities are available for volunteers of all ages. Every Tuesday, volunteers can assist with packing food in Destin (908 Airport Rd, Destin, FL 32541) and Santa Rosa Beach (132 Market St, Santa Rosa Beach, FL 32459). Every Wednesday, volunteers can assist with curbside service, mornings and/or evenings. Volunteers must complete paperwork and in-person training to get started.",
          leader: "Food For Thought",
          contact: "volunteer@fftfl.org, 850-290-4056"
        },
        {
          name: "Fort Walton Beach Center for Women",
          description: "The Fort Walton Beach Center for Women provides free and confidential services and information to pregnant women in Okaloosa County, and has various volunteer opportunities available for those who desire to share in this mission. Clients are served without regard to age, race, income, nationality, religious affiliation, disability or other arbitrary circumstances.",
          leader: "the Fort Walton Beach Center for Women",
          contact: "850-862-9020 between 9am and 12pm on Mondays and Wednesdays"
        },
        {
          name: "Pregnancy Resource Center of Navarre",
          description: "The Pregnancy Resource Center of Navarre provides free and confidential services and information to pregnant women in the Emerald Coast. Clients are served without regard to age, race, income, nationality, religious affiliation, disability or other arbitrary circumstances. Volunteers with skills in standard office software (Microsoft Word, Excel, etc.) are always needed to help with office work, as well as volunteers to help manage the organization's social media. Adult women (early 20s and up) with a passion for helping pregnant mothers in need are encouraged to become Client Advocates, who are trained to talk with and assist clients.",
          leader: "the Pregnancy Resource Center of Navarre",
          contact: "850-515-0334"
        },
        {
          name: "Opportunity Place",
          description: "Opportunity Place provides safe shelter, supportive services, and resources for the chronically homeless and for those experiencing homelessness due to a negative event or situation that occurred in their lives. Opportunity Place hosts Youth Nights every Tuesday and Thursday night from 5:30pm to 7pm, where volunteers come in and engage in activities with the children in the shelter. Friday morning volunteers are needed to answer the phone with shelter support. Volunteers fill out an application and are then added to a newsletter with information on new volunteer opportunities.",
          leader: "Opportunity Place",
          contact: "info@opifwb.org, 850-659-3190"
        },
        {
          name: "Shelter House",
          description: "Shelter House provides shelter, intervention and primary prevention programs to the community through education, awareness and advocating for social change. Volunteers that wish to work closely with participants or work on the 24-hour hotline are required to attend a 30-hour Core Competency Training. This is a 24-hour class (three full days) in addition to six hours of observation. Volunteers on the Rape Response Team (RRT) must complete Advocacy Core Training, which includes self-led online training, role playing and on-the-job training. For those not interested in direct service, opportunities include sorting through donations, collecting cell phones in the community, promoting and working events and fundraisers, handing out brochures and flyers, picking up donations, assisting with administrative duties, and much more. Opportunities for groups are also available. Your business, religious organization, youth group or other organization can work together for a group project.",
          leader: "the Shelter House Volunteer Coordinator",
          contact: "volunteer@shelterhousenwfl.org, 850-243-1201"
        },
        {
          name: "Catholic Charities of Northwest Florida",
          description: "Catholic Charities of Northwest Florida serves, empowers, and advocates for impoverished and vulnerable families and individuals of any race, religion or national origin across the Florida Panhandle. Volunteers are needed to help at the Food Pantry, which operates from 9am-12pm Mondays through Thursdays, and to help distribute lunches from 12:30-4pm, also Mondays through Thursdays. Volunteers are also needed to help in the office with administrative tasks. These opportunites are generally for adults, but families with children may also be able to assist.",
          leader: "Catholic Charities of Northwest Florida's Fort Walton Beach Office",
          contact: "850-244-2825"
        },
        {
          name: "Habitat For Humanity in Okaloosa County",
          description: "Habitat for Humanity Okaloosa County welcomes people from all walks of life to join them as they build affordable, safe homes in partnership with families in need. There are opportunities for Construction Volunteers, ReStore Volunteers, Special Event Volunteering and Youth Volunteers.",
          leader: "the Habitat For Humanity in Okaloosa County Volunteer Coordinator",
          contact: "volunteer@habitatfwb.org, 850-315-0025"
        },
        {
          name: "Prison Ministry",
          description: "This ministry answers Jesus' call to visit the imprisoned, and involves being available to talk and pray with the inmates. Volunteers undergo a background check and similar screening through the Okaloosa County Prison System.",
          leader: "Deacon Tony DeCotis",
          contact: "deacon@saintpeter.me, 850-581-2556"
        }
      ],
    },
    {
      gift: 'Mission',
      score: 0,
      description: "To exercise the gift of mission is to faithfully and mutually share what one has learned about God. This gift involves a willingness to be with and share with people of different heritage, customs, economic background, experience, or manner of speaking, as much a willingness to listen as to speak and an awareness that God loves all people. 1 Corinthians 9:19-23, Mark 16:15-20",
      parish: [
        {
          name: "Outreach to Parish Homebound/Elderly",
          description: "This ministry is for those who to assist, talk with, and pray with the homebound and elderly in our parish.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Elementary Faith Formation - Catechist, Aide, Teen Aide, Catechist Substitute",
          description: "Volunteers are needed to share their gift of faith with the children of our parish (VPK through 5th grade) during the school year. Classes meet on Sundays, from 9:15-10:15 a.m. Catechists plan and lead lessons, and are supported in the classroom by Aides and Teen Aides. In addition to these three positions, there is a need for Catechist Substitutes to fill in as needed.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Middle School Adult Ministry Team",
          description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our middle schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
          leader: "Amanda Martin",
          contact: "amartin@okaloosapa.com, 850-581-2556"
        },
        {
          name: "High School Adult Ministry Team",
          description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our high schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Adult Faith Formation",
          description: "Those with a passion for teaching other adults about the Catholic faith are encouraged to get involved with planning and leading our Adult Faith Formation sessions on Sundays.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Parish Office Volunteer",
          description: "This ministry is for those who are able to serve the parish by helping out at the Office. Volunteers assist with clerical work and are trained to answer phone calls to the church.",
          leader: "Ana Livoti-Fails",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Small Group Leader",
          description: "Small Groups follow Jesus' example of journeying through life and towards God together with a close group of fellow Christians. Leaders are trained in how to invite members and facililtate group discussions. Meeting times, locations, frequency, and topics/resources are flexible and vary depending on who is in the group, and the parish is able to assist in many of these areas. We are always in need of Small Group Leaders, so if this interests you, please prayerfully consider whether God is calling you to lead your parish community in this way.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Young Adult Ministry",
          description: "Volunteers and leaders in this ministry help with scheduling, organizing, promoting, and running Young Adult Ministry activities and events. According to the United States Conference of Catholic Bishops, \"Young adults are persons in their late teens, twenties, and thirties who represent diverse cultural, racial, ethnic, educational, vocational, social, political, and spiritual backgrounds. They are college students, workers, and professionals; they are persons in military service; they are single, married, divorced, or widowed; they are with or without children; they are newcomers in search of a better life.\"",
          leader: "Tyler Acosta",
          contact: "music@saintpeter.me, 850-581-2556"
        }
      ],
      local: [
        {
          name: "Food For Thought",
          description: "Food For Thought is the go-to organization for fighting childhood hunger in Walton and Okaloosa Counties. Opportunities are available for volunteers of all ages. Every Tuesday, volunteers can assist with packing food in Destin (908 Airport Rd, Destin, FL 32541) and Santa Rosa Beach (132 Market St, Santa Rosa Beach, FL 32459). Every Wednesday, volunteers can assist with curbside service, mornings and/or evenings. Volunteers must complete paperwork and in-person training to get started.",
          leader: "Food For Thought",
          contact: "volunteer@fftfl.org, 850-290-4056"
        },
        {
          name: "Fort Walton Beach Center for Women",
          description: "The Fort Walton Beach Center for Women provides free and confidential services and information to pregnant women in Okaloosa County, and has various volunteer opportunities available for those who desire to share in this mission. Clients are served without regard to age, race, income, nationality, religious affiliation, disability or other arbitrary circumstances.",
          leader: "the Fort Walton Beach Center for Women",
          contact: "850-862-9020 between 9am and 12pm on Mondays and Wednesdays"
        },
        {
          name: "Pregnancy Resource Center of Navarre",
          description: "The Pregnancy Resource Center of Navarre provides free and confidential services and information to pregnant women in the Emerald Coast. Clients are served without regard to age, race, income, nationality, religious affiliation, disability or other arbitrary circumstances. Volunteers with skills in standard office software (Microsoft Word, Excel, etc.) are always needed to help with office work, as well as volunteers to help manage the organization's social media. Adult women (early 20s and up) with a passion for helping pregnant mothers in need are encouraged to become Client Advocates, who are trained to talk with and assist clients.",
          leader: "the Pregnancy Resource Center of Navarre",
          contact: "850-515-0334"
        },
        {
          name: "Opportunity Place",
          description: "Opportunity Place provides safe shelter, supportive services, and resources for the chronically homeless and for those experiencing homelessness due to a negative event or situation that occurred in their lives. Opportunity Place hosts Youth Nights every Tuesday and Thursday night from 5:30pm to 7pm, where volunteers come in and engage in activities with the children in the shelter. Friday morning volunteers are needed to answer the phone with shelter support. Volunteers fill out an application and are then added to a newsletter with information on new volunteer opportunities.",
          leader: "Opportunity Place",
          contact: "info@opifwb.org, 850-659-3190"
        },
        {
          name: "Shelter House",
          description: "Shelter House provides shelter, intervention and primary prevention programs to the community through education, awareness and advocating for social change. Volunteers that wish to work closely with participants or work on the 24-hour hotline are required to attend a 30-hour Core Competency Training. This is a 24-hour class (three full days) in addition to six hours of observation. Volunteers on the Rape Response Team (RRT) must complete Advocacy Core Training, which includes self-led online training, role playing and on-the-job training. For those not interested in direct service, opportunities include sorting through donations, collecting cell phones in the community, promoting and working events and fundraisers, handing out brochures and flyers, picking up donations, assisting with administrative duties, and much more. Opportunities for groups are also available. Your business, religious organization, youth group or other organization can work together for a group project.",
          leader: "the Shelter House Volunteer Coordinator",
          contact: "volunteer@shelterhousenwfl.org, 850-243-1201"
        },
        {
          name: "Catholic Charities of Northwest Florida",
          description: "Catholic Charities of Northwest Florida serves, empowers, and advocates for impoverished and vulnerable families and individuals of any race, religion or national origin across the Florida Panhandle. Volunteers are needed to help at the Food Pantry, which operates from 9am-12pm Mondays through Thursdays, and to help distribute lunches from 12:30-4pm, also Mondays through Thursdays. Volunteers are also needed to help in the office with administrative tasks. These opportunites are generally for adults, but families with children may also be able to assist.",
          leader: "Catholic Charities of Northwest Florida's Fort Walton Beach Office",
          contact: "850-244-2825"
        },
        {
          name: "Habitat For Humanity in Okaloosa County",
          description: "Habitat for Humanity Okaloosa County welcomes people from all walks of life to join them as they build affordable, safe homes in partnership with families in need. There are opportunities for Construction Volunteers, ReStore Volunteers, Special Event Volunteering and Youth Volunteers.",
          leader: "the Habitat For Humanity in Okaloosa County Volunteer Coordinator",
          contact: "volunteer@habitatfwb.org, 850-315-0025"
        },
        {
          name: "Prison Ministry",
          description: "This ministry answers Jesus' call to visit the imprisoned, and involves being available to talk and pray with the inmates. Volunteers undergo a background check and similar screening through the Okaloosa County Prison System.",
          leader: "Deacon Tony DeCotis",
          contact: "deacon@saintpeter.me, 850-581-2556"
        }
      ],
    },
    {
      gift: 'Musicianship',
      score: 0,
      description: "The Holy Spirit enables some to praise God through various forms of music and enhance the worship experience of the parish community. To exercise the gift of music may involve some skill in singing or in playing an instrument but may also include the ability to select appropriate music for a worship service or parish event or program. 1 Corinthians 14:26, Psalm 98:1, 4-6; Psalm 150:3-6",
      parish: [
        {
          name: "Weekend Choir",
          description: "Open to adults, youth and children with some singing talent or experience, choir members offer their voices in service to the parish for Sunday Mass and for other special feasts. Choir members are welcome to sing at any or all of our weekend Masses - 5pm Saturday Vigil, 8am Sunday Mass, and 10:30am Sunday Mass. Rehearsals take place 45 minutes prior to each Mass.",
          leader: "Tyler Acosta",
          contact: "music@saintpeter.me, 850-581-2556"
        },
        {
          name: "Cantor",
          description: "Cantors are singers interested in guiding the congregation in prayer and worship through song. They must have some singing talent and be able or willing to learn to lead a large assembly comfortably. We are always in need of cantors, who can volunteer to sing as frequently or infrequently as they like.",
          leader: "Tyler Acosta",
          contact: "music@saintpeter.me, 850-581-2556"
        },
        {
          name: "Instrumentalist",
          description: "Instrumentalists assist in leading the congregation in prayer and worship by offering their instrumental talents to the community. We are always in need of orchestral instrument players with some talent or experience at our weekend Masses, and especially for higher feasts like Christmas and Easter.",
          leader: "Tyler Acosta",
          contact: "music@saintpeter.me, 850-581-2556"
        },
        {
          name: "Seasonal Christmas/Easter Choir",
          description: "If you have some singing talent or experience, please prayefully consider joining our Seasonal Choir to sing for Christmas and/or Easter. Christmas Choir rehearsals usually begin around the First Sunday of Advent, and Easter Choir rehearsals usually begin around the First Sunday of Lent.",
          leader: "Tyler Acosta",
          contact: "music@saintpeter.me, 850-581-2556"
        },
      ],
      local: [],
    },
    {
      gift: 'Servant Leadership',
      score: 0,
      description: "The gift of servant leadership allows individuals to assume responsibility for the leadership and guidance of a group within the church. It includes leading, facilitating, counseling and providing a pastoral presence for various parish programs. 1 Peter 5:1-11",
      parish: [
        {
          name: "Knights of Columbus Council 8910",
          description: "The Knights of Columbus is a brotherhood of Catholic men 18 years of age and older who each play a part in improving the community. We stand together in faith, and are dedicated to upholding the principles of charity, unity, fraternity and patriotism while lending support and strength to our parish, home, community, and fellow Knights. Activities at St. Peter include planning and assisting at fundraisers, including Pancake Breakfasts and Lenten Fish Fries.",
          leader: "Jason Heidbreder",
          contact: "jasonheidbreder@yahoo.com, 850-581-2556"
        },
        {
          name: "Youth Night Kitchen Team",
          description: "The Youth Night Kitchen Team meets on Sunday afternoons before Youth Nights to cook dinner for the attendees.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Elementary Faith Formation - Catechist, Aide, Teen Aide, Catechist Substitute",
          description: "Volunteers are needed to share their gift of faith with the children of our parish (VPK through 5th grade) during the school year. Classes meet on Sundays, from 9:15-10:15 a.m. Catechists plan and lead lessons, and are supported in the classroom by Aides and Teen Aides. In addition to these three positions, there is a need for Catechist Substitutes to fill in as needed.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Middle School Adult Ministry Team",
          description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our middle schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
          leader: "Amanda Martin",
          contact: "amartin@okaloosapa.com, 850-581-2556"
        },
        {
          name: "High School Adult Ministry Team",
          description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our high schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Young Adult Ministry",
          description: "Volunteers and leaders in this ministry help with scheduling, organizing, promoting, and running Young Adult Ministry activities and events. According to the United States Conference of Catholic Bishops, \"Young adults are persons in their late teens, twenties, and thirties who represent diverse cultural, racial, ethnic, educational, vocational, social, political, and spiritual backgrounds. They are college students, workers, and professionals; they are persons in military service; they are single, married, divorced, or widowed; they are with or without children; they are newcomers in search of a better life.\"",
          leader: "Tyler Acosta",
          contact: "music@saintpeter.me, 850-581-2556"
        },
        {
          name: "Adult Faith Formation",
          description: "Those with a passion for teaching other adults about the Catholic faith are encouraged to get involved with planning and leading our Adult Faith Formation sessions on Sundays.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Small Group Leader",
          description: "Small Groups follow Jesus' example of journeying through life and towards God together with a close group of fellow Christians. Leaders are trained in how to invite members and facililtate group discussions. Meeting times, locations, frequency, and topics/resources are flexible and vary depending on who is in the group, and the parish is able to assist in many of these areas. We are always in need of Small Group Leaders, so if this interests you, please prayerfully consider whether God is calling you to lead your parish community in this way.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Sacristan",
          description: "Sacristans prepare the sanctuary for the celebration of one Mass on weekends and Holy Days of Obligation. They work quietly behind-the-scenes to ensure that liturgies run smoothly, preparing the sacred vessels needed for liturgy, and cleaning and putting away all items afterwards. They also make sure all the other liturgical ministries are covered by those scheduled, or find substitutes. Screening and training is required.",
          leader: "Rose DeCotis",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Altar Server",
          description: "This ministry assists in the liturgical life of the parish during weekend Masses. Serving instills a sense of responsibility to the church and also enhances a personal relationship with Jesus as our youth take part in the Mass in such an intimate way. This ministry is open to anyone who has received the Sacraments of Baptism and First Holy Communion and is able to carry out all of the duties required. You will be trained in the duties and responsibilities of the ministry and will be asked to arrive 20 minutes before Mass begins.",
          leader: "Deacon Tony DeCotis",
          contact: "deacon@saintpeter.me, 850-581-2556"
        },
        {
          name: "Coffee and Donuts Ministry",
          description: "Volunteers are needed to help pick up donuts, brew coffee, set up tables, serve Coffee and Donuts, and clean up afterwards, which involves some work before and after one of our Sunday Masses.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Parish Dinners",
          description: "This ministry assists with planning, setting up for, and cleaning up after dinner events and parish potlucks.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Seasonal Decorating",
          description: "This ministry is for those who would like to help decorate the Church for different liturgical seasons and feasts (Christmas, Easter, Lent, Advent, etc.).",
          leader: "Ana Livoti-Fails",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Vacation Bible School (VBS) Volunteer",
          description: "Volunteers are needed to help with our annual summer VBS program. Opportunites for service include leading and teaching the program content and activities, serving as an aide to supervise children, making decorations to transform spaces and classrooms, and/or cleanup.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Grounds Beautification Ministry",
          description: "This ministry is for those who are able to help with planting, landscaping, and similar outdoor tasks to help keep our parish ground beautiful.",
          leader: "Alicia Graham",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Maintenance Volunteer",
          description: "We are always looking for volunteers with experience in painting, plumbing, carpentry, and similar repair/maintenance areas to help with various projects at the church.",
          leader: "John Fails",
          contact: "maintenance@saintpeter.me, 850-581-2556"
        },
        {
          name: "Parish Library Volunteer",
          description: "Library Volunteers maintain the Parish Library, process book donations, and assist parishioners with checking out physical and digital materials.",
          leader: "Judy Holzschuh",
          contact: "library@saintpeter.me, 850-581-2556"
        },
        {
          name: "Stewardship Committee",
          description: "This committee assists in communicating the parish's vision for stewardship throughout the parish, and organizes the annual Ministry Fair.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        }
      ],
      local: [],
    },
    {
      gift: 'Trust',
      score: 0,
      description: "The Holy Spirit empowers some individuals to accomplish much toward achieving God’s will in our church and community. In some versions of Scripture this gift is called the working of miracles. This gift involves a firm and faithful relationship with God, courage in the face of adversity and a willingness to trust in the power of God. John 14:11-14, Micah 3:8, Acts 1:8, 2 Timothy 1:5-7",
      parish: [
        {
          name: "Stewardship Committee",
          description: "This committee assists in communicating the parish's vision for stewardship throughout the parish, and organizes the annual Ministry Fair.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Lazarus Ministry",
          description: "This ministry assists with setting up for funeral receptions to help comfort those who are mourning.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Extraordinary Minister of Holy Communion (EMHC)",
          description: "Extraordinary Ministers of Holy Communion are trained to assist the priest in the distribution of Holy Communion at Mass under extraordinary circumstances, and to bring communion to the sick or aged.",
          leader: "Father Doug Martin",
          contact: "pastor@saintpeter.me, 850-581-2556"
        },
        {
          name: "Parish Office Volunteer",
          description: "This ministry is for those who are able to serve the parish by helping out at the Office. Volunteers assist with clerical work and are trained to answer phone calls to the church.",
          leader: "Ana Livoti-Fails",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Weekly Collection Counters",
          description: "Volunteers are needed to help on Monday mornings with counting the Offertory collections from the past weekend.",
          leader: "Paul Johansen",
          contact: "finance@saintpeter.me, 850-581-2556"
        },
        {
          name: "Prayer Chain",
          description: "The Prayer Chain is for those who wish to receive emails about urgent prayer needs in the parish so that they can pray for those in great need.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        }
      ],
      local: [
        {
          name: "Food For Thought",
          description: "Food For Thought is the go-to organization for fighting childhood hunger in Walton and Okaloosa Counties. Opportunities are available for volunteers of all ages. Every Tuesday, volunteers can assist with packing food in Destin (908 Airport Rd, Destin, FL 32541) and Santa Rosa Beach (132 Market St, Santa Rosa Beach, FL 32459). Every Wednesday, volunteers can assist with curbside service, mornings and/or evenings. Volunteers must complete paperwork and in-person training to get started.",
          leader: "Food For Thought",
          contact: "volunteer@fftfl.org, 850-290-4056"
        },
        {
          name: "Fort Walton Beach Center for Women",
          description: "The Fort Walton Beach Center for Women provides free and confidential services and information to pregnant women in Okaloosa County, and has various volunteer opportunities available for those who desire to share in this mission. Clients are served without regard to age, race, income, nationality, religious affiliation, disability or other arbitrary circumstances.",
          leader: "the Fort Walton Beach Center for Women",
          contact: "850-862-9020 between 9am and 12pm on Mondays and Wednesdays"
        },
        {
          name: "Pregnancy Resource Center of Navarre",
          description: "The Pregnancy Resource Center of Navarre provides free and confidential services and information to pregnant women in the Emerald Coast. Clients are served without regard to age, race, income, nationality, religious affiliation, disability or other arbitrary circumstances. Volunteers with skills in standard office software (Microsoft Word, Excel, etc.) are always needed to help with office work, as well as volunteers to help manage the organization's social media. Adult women (early 20s and up) with a passion for helping pregnant mothers in need are encouraged to become Client Advocates, who are trained to talk with and assist clients.",
          leader: "the Pregnancy Resource Center of Navarre",
          contact: "850-515-0334"
        },
        {
          name: "Opportunity Place",
          description: "Opportunity Place provides safe shelter, supportive services, and resources for the chronically homeless and for those experiencing homelessness due to a negative event or situation that occurred in their lives. Opportunity Place hosts Youth Nights every Tuesday and Thursday night from 5:30pm to 7pm, where volunteers come in and engage in activities with the children in the shelter. Friday morning volunteers are needed to answer the phone with shelter support. Volunteers fill out an application and are then added to a newsletter with information on new volunteer opportunities.",
          leader: "Opportunity Place",
          contact: "info@opifwb.org, 850-659-3190"
        },
        {
          name: "Shelter House",
          description: "Shelter House provides shelter, intervention and primary prevention programs to the community through education, awareness and advocating for social change. Volunteers that wish to work closely with participants or work on the 24-hour hotline are required to attend a 30-hour Core Competency Training. This is a 24-hour class (three full days) in addition to six hours of observation. Volunteers on the Rape Response Team (RRT) must complete Advocacy Core Training, which includes self-led online training, role playing and on-the-job training. For those not interested in direct service, opportunities include sorting through donations, collecting cell phones in the community, promoting and working events and fundraisers, handing out brochures and flyers, picking up donations, assisting with administrative duties, and much more. Opportunities for groups are also available. Your business, religious organization, youth group or other organization can work together for a group project.",
          leader: "the Shelter House Volunteer Coordinator",
          contact: "volunteer@shelterhousenwfl.org, 850-243-1201"
        },
        {
          name: "Catholic Charities of Northwest Florida",
          description: "Catholic Charities of Northwest Florida serves, empowers, and advocates for impoverished and vulnerable families and individuals of any race, religion or national origin across the Florida Panhandle. Volunteers are needed to help at the Food Pantry, which operates from 9am-12pm Mondays through Thursdays, and to help distribute lunches from 12:30-4pm, also Mondays through Thursdays. Volunteers are also needed to help in the office with administrative tasks. These opportunites are generally for adults, but families with children may also be able to assist.",
          leader: "Catholic Charities of Northwest Florida's Fort Walton Beach Office",
          contact: "850-244-2825"
        },
        {
          name: "Habitat For Humanity in Okaloosa County",
          description: "Habitat for Humanity Okaloosa County welcomes people from all walks of life to join them as they build affordable, safe homes in partnership with families in need. There are opportunities for Construction Volunteers, ReStore Volunteers, Special Event Volunteering and Youth Volunteers.",
          leader: "the Habitat For Humanity in Okaloosa County Volunteer Coordinator",
          contact: "volunteer@habitatfwb.org, 850-315-0025"
        },
        {
          name: "Prison Ministry",
          description: "This ministry answers Jesus' call to visit the imprisoned, and involves being available to talk and pray with the inmates. Volunteers undergo a background check and similar screening through the Okaloosa County Prison System.",
          leader: "Deacon Tony DeCotis",
          contact: "deacon@saintpeter.me, 850-581-2556"
        }
      ],
    },
    {
      gift: 'Prophet',
      score: 0,
      description: "The Holy Spirit empowers some individuals to interpret and apply God’s revelation in a given situation. This gift involves a keen sense of the dignity of all people, a sense of call, a sense of timing and some knowledge of Scripture and church teachings. 1 Corinthians 14:1-5, 1 Corinthians 14:30-33a, 1 Corinthians 14:37-40",
      parish: [
        {
          name: "Elementary Faith Formation - Catechist, Aide, Teen Aide, Catechist Substitute",
          description: "Volunteers are needed to share their gift of faith with the children of our parish (VPK through 5th grade) during the school year. Classes meet on Sundays, from 9:15-10:15 a.m. Catechists plan and lead lessons, and are supported in the classroom by Aides and Teen Aides. In addition to these three positions, there is a need for Catechist Substitutes to fill in as needed.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Adult Faith Formation",
          description: "Those with a passion for teaching other adults about the Catholic faith are encouraged to get involved with planning and leading our Adult Faith Formation sessions on Sundays.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Small Group Leader",
          description: "Small Groups follow Jesus' example of journeying through life and towards God together with a close group of fellow Christians. Leaders are trained in how to invite members and facililtate group discussions. Meeting times, locations, frequency, and topics/resources are flexible and vary depending on who is in the group, and the parish is able to assist in many of these areas. We are always in need of Small Group Leaders, so if this interests you, please prayerfully consider whether God is calling you to lead your parish community in this way.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Middle School Adult Ministry Team",
          description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our middle schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
          leader: "Amanda Martin",
          contact: "amartin@okaloosapa.com, 850-581-2556"
        },
        {
          name: "High School Adult Ministry Team",
          description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our high schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Order of Christian Initiation for Adults (OCIA) Sponsor",
          description: "A sponsor is an active Catholic that is willing to be a companion to an OCIA student as they go through the process of becoming Catholic. Sponsors attend class with students, meet or talk with them to answer questions and walk with them on their journey of faith.",
          leader: "Tom Lehmann",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Order of Christian Initiation for Adults (OCIA) Catechist Team",
          description: "Those who are knowledgable in their faith and who are interested in sharing Jesus with those who are considering becoming Catholic are encouraged to join the OCIA Catechist Team. Catechists assist in planning and teaching weekly lessons.",
          leader: "Tom Lehmann",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Vacation Bible School (VBS) Volunteer",
          description: "Volunteers are needed to help with our annual summer VBS program. Opportunites for service include leading and teaching the program content and activities, serving as an aide to supervise children, making decorations to transform spaces and classrooms, and/or cleanup.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Young Adult Ministry",
          description: "Volunteers and leaders in this ministry help with scheduling, organizing, promoting, and running Young Adult Ministry activities and events. According to the United States Conference of Catholic Bishops, \"Young adults are persons in their late teens, twenties, and thirties who represent diverse cultural, racial, ethnic, educational, vocational, social, political, and spiritual backgrounds. They are college students, workers, and professionals; they are persons in military service; they are single, married, divorced, or widowed; they are with or without children; they are newcomers in search of a better life.\"",
          leader: "Tyler Acosta",
          contact: "music@saintpeter.me, 850-581-2556"
        },
        {
          name: "Extraordinary Minister of Holy Communion (EMHC)",
          description: "Extraordinary Ministers of Holy Communion are trained to assist the priest in the distribution of Holy Communion at Mass under extraordinary circumstances, and to bring communion to the sick or aged.",
          leader: "Father Doug Martin",
          contact: "pastor@saintpeter.me, 850-581-2556"
        },
      ],
      local: [],
    },
    {
      gift: 'Service',
      score: 0,
      description: "To exercise the gift of service is to identify closely with the needs and problems of others, not providing answers or solutions, but being willing to work with them, no matter how small or how big the task may be. This gift involves a willingness to \“pitch in\” and do whatever is needed, no matter how detailed or tedious the task. Galatians 6:1-2, Philippians 2:3-8",
      parish: [
        {
          name: "Extraordinary Minister of Holy Communion (EMHC)",
          description: "Extraordinary Ministers of Holy Communion are trained to assist the priest in the distribution of Holy Communion at Mass under extraordinary circumstances, and to bring communion to the sick or aged.",
          leader: "Father Doug Martin",
          contact: "pastor@saintpeter.me, 850-581-2556"
        },
        {
          name: "Outreach to Parish Homebound/Elderly",
          description: "This ministry is for those who to assist, talk with, and pray with the homebound and elderly in our parish.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Knights of Columbus Council 8910",
          description: "The Knights of Columbus is a brotherhood of Catholic men 18 years of age and older who each play a part in improving the community. We stand together in faith, and are dedicated to upholding the principles of charity, unity, fraternity and patriotism while lending support and strength to our parish, home, community, and fellow Knights. Activities at St. Peter include planning and assisting at fundraisers, including Pancake Breakfasts and Lenten Fish Fries.",
          leader: "Jason Heidbreder",
          contact: "jasonheidbreder@yahoo.com, 850-581-2556"
        },
        {
          name: "Lazarus Ministry",
          description: "This ministry assists with setting up for funeral receptions to help comfort those who are mourning.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Youth Night Kitchen Team",
          description: "The Youth Night Kitchen Team meets on Sunday afternoons before Youth Nights to cook dinner for the attendees.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Usher/Greeter",
          description: "Ushers greet parishioners and open the doors for the weekend Masses. They also assist with seating, collecting the offertory, handing out bulletins and straightening up the pews after Mass. Greeters make the first experience of our parish a positive one with a warm welcome and a friendly smile. This ministry provides a link to what is happening in the parish community by being available before and after the Mass to answer questions and share current events.",
          leader: "Tere Brenci",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Parish Dinners",
          description: "This ministry assists with planning, setting up for, and cleaning up after dinner events and parish potlucks.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Parish Office Volunteer",
          description: "This ministry is for those who are able to serve the parish by helping out at the Office. Volunteers assist with clerical work and are trained to answer phone calls to the church.",
          leader: "Ana Livoti-Fails",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Nursery/Childcare Volunteer",
          description: "We are always in need of volunteers to help in the Nursery on Sundays, and to help with Childcare for various parish events. Volunteers undergo a Diocesan background check and video training.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Elementary Faith Formation - Catechist, Aide, Teen Aide, Catechist Substitute",
          description: "Volunteers are needed to share their gift of faith with the children of our parish (VPK through 5th grade) during the school year. Classes meet on Sundays, from 9:15-10:15 a.m. Catechists plan and lead lessons, and are supported in the classroom by Aides and Teen Aides. In addition to these three positions, there is a need for Catechist Substitutes to fill in as needed.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Sacristan",
          description: "Sacristans prepare the sanctuary for the celebration of one Mass on weekends and Holy Days of Obligation. They work quietly behind-the-scenes to ensure that liturgies run smoothly, preparing the sacred vessels needed for liturgy, and cleaning and putting away all items afterwards. They also make sure all the other liturgical ministries are covered by those scheduled, or find substitutes. Screening and training is required.",
          leader: "Rose DeCotis",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Altar Server",
          description: "This ministry assists in the liturgical life of the parish during weekend Masses. Serving instills a sense of responsibility to the church and also enhances a personal relationship with Jesus as our youth take part in the Mass in such an intimate way. This ministry is open to anyone who has received the Sacraments of Baptism and First Holy Communion and is able to carry out all of the duties required. You will be trained in the duties and responsibilities of the ministry and will be asked to arrive 20 minutes before Mass begins.",
          leader: "Deacon Tony DeCotis",
          contact: "deacon@saintpeter.me, 850-581-2556"
        },
        {
          name: "Coffee and Donuts Ministry",
          description: "Volunteers are needed to help pick up donuts, brew coffee, set up tables, serve Coffee and Donuts, and clean up afterwards, which involves some work before and after one of our Sunday Masses.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Altar Linen Cleaner",
          description: "Volunteers are needed to assist with regular cleaning, folding, and storage of Altar Linens.",
          leader: "Rose DeCotis",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Seasonal Decorating",
          description: "This ministry is for those who would like to help decorate the Church for different liturgical seasons and feasts (Christmas, Easter, Lent, Advent, etc.).",
          leader: "Ana Livoti-Fails",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Vacation Bible School (VBS) Volunteer",
          description: "Volunteers are needed to help with our annual summer VBS program. Opportunites for service include leading and teaching the program content and activities, serving as an aide to supervise children, making decorations to transform spaces and classrooms, and/or cleanup.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Grounds Beautification Ministry",
          description: "This ministry is for those who are able to help with planting, landscaping, and similar outdoor tasks to help keep our parish ground beautiful.",
          leader: "Alicia Graham",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Maintenance Volunteer",
          description: "We are always looking for volunteers with experience in painting, plumbing, carpentry, and similar repair/maintenance areas to help with various projects at the church.",
          leader: "John Fails",
          contact: "maintenance@saintpeter.me, 850-581-2556"
        },
        {
          name: "Parish Library Volunteer",
          description: "Library Volunteers maintain the Parish Library, process book donations, and assist parishioners with checking out physical and digital materials.",
          leader: "Judy Holzschuh",
          contact: "library@saintpeter.me, 850-581-2556"
        },
        {
          name: "Stewardship Committee",
          description: "This committee assists in communicating the parish's vision for stewardship throughout the parish, and organizes the annual Ministry Fair.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        }
      ],
      local: [
        {
          name: "Food For Thought",
          description: "Food For Thought is the go-to organization for fighting childhood hunger in Walton and Okaloosa Counties. Opportunities are available for volunteers of all ages. Every Tuesday, volunteers can assist with packing food in Destin (908 Airport Rd, Destin, FL 32541) and Santa Rosa Beach (132 Market St, Santa Rosa Beach, FL 32459). Every Wednesday, volunteers can assist with curbside service, mornings and/or evenings. Volunteers must complete paperwork and in-person training to get started.",
          leader: "Food For Thought",
          contact: "volunteer@fftfl.org, 850-290-4056"
        },
        {
          name: "Fort Walton Beach Center for Women",
          description: "The Fort Walton Beach Center for Women provides free and confidential services and information to pregnant women in Okaloosa County, and has various volunteer opportunities available for those who desire to share in this mission. Clients are served without regard to age, race, income, nationality, religious affiliation, disability or other arbitrary circumstances.",
          leader: "the Fort Walton Beach Center for Women",
          contact: "850-862-9020 between 9am and 12pm on Mondays and Wednesdays"
        },
        {
          name: "Pregnancy Resource Center of Navarre",
          description: "The Pregnancy Resource Center of Navarre provides free and confidential services and information to pregnant women in the Emerald Coast. Clients are served without regard to age, race, income, nationality, religious affiliation, disability or other arbitrary circumstances. Volunteers with skills in standard office software (Microsoft Word, Excel, etc.) are always needed to help with office work, as well as volunteers to help manage the organization's social media. Adult women (early 20s and up) with a passion for helping pregnant mothers in need are encouraged to become Client Advocates, who are trained to talk with and assist clients.",
          leader: "the Pregnancy Resource Center of Navarre",
          contact: "850-515-0334"
        },
        {
          name: "Opportunity Place",
          description: "Opportunity Place provides safe shelter, supportive services, and resources for the chronically homeless and for those experiencing homelessness due to a negative event or situation that occurred in their lives. Opportunity Place hosts Youth Nights every Tuesday and Thursday night from 5:30pm to 7pm, where volunteers come in and engage in activities with the children in the shelter. Friday morning volunteers are needed to answer the phone with shelter support. Volunteers fill out an application and are then added to a newsletter with information on new volunteer opportunities.",
          leader: "Opportunity Place",
          contact: "info@opifwb.org, 850-659-3190"
        },
        {
          name: "Shelter House",
          description: "Shelter House provides shelter, intervention and primary prevention programs to the community through education, awareness and advocating for social change. Volunteers that wish to work closely with participants or work on the 24-hour hotline are required to attend a 30-hour Core Competency Training. This is a 24-hour class (three full days) in addition to six hours of observation. Volunteers on the Rape Response Team (RRT) must complete Advocacy Core Training, which includes self-led online training, role playing and on-the-job training. For those not interested in direct service, opportunities include sorting through donations, collecting cell phones in the community, promoting and working events and fundraisers, handing out brochures and flyers, picking up donations, assisting with administrative duties, and much more. Opportunities for groups are also available. Your business, religious organization, youth group or other organization can work together for a group project.",
          leader: "the Shelter House Volunteer Coordinator",
          contact: "volunteer@shelterhousenwfl.org, 850-243-1201"
        },
        {
          name: "Catholic Charities of Northwest Florida",
          description: "Catholic Charities of Northwest Florida serves, empowers, and advocates for impoverished and vulnerable families and individuals of any race, religion or national origin across the Florida Panhandle. Volunteers are needed to help at the Food Pantry, which operates from 9am-12pm Mondays through Thursdays, and to help distribute lunches from 12:30-4pm, also Mondays through Thursdays. Volunteers are also needed to help in the office with administrative tasks. These opportunites are generally for adults, but families with children may also be able to assist.",
          leader: "Catholic Charities of Northwest Florida's Fort Walton Beach Office",
          contact: "850-244-2825"
        },
        {
          name: "Habitat For Humanity in Okaloosa County",
          description: "Habitat for Humanity Okaloosa County welcomes people from all walks of life to join them as they build affordable, safe homes in partnership with families in need. There are opportunities for Construction Volunteers, ReStore Volunteers, Special Event Volunteering and Youth Volunteers.",
          leader: "the Habitat For Humanity in Okaloosa County Volunteer Coordinator",
          contact: "volunteer@habitatfwb.org, 850-315-0025"
        },
      ],
    },
    {
      gift: 'Teacher',
      score: 0,
      description: "The Holy Spirit enables some individuals to communicate so that others can learn. To exercise the gift of teaching one effectively imparts information or proclaims precepts of our Catholic faith either orally, visually or by example. Hebrews 5:12-14, Isaiah 28:9-10",
      parish: [
        {
          name: "Elementary Faith Formation - Catechist, Aide, Teen Aide, Catechist Substitute",
          description: "Volunteers are needed to share their gift of faith with the children of our parish (VPK through 5th grade) during the school year. Classes meet on Sundays, from 9:15-10:15 a.m. Catechists plan and lead lessons, and are supported in the classroom by Aides and Teen Aides. In addition to these three positions, there is a need for Catechist Substitutes to fill in as needed.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Adult Faith Formation",
          description: "Those with a passion for teaching other adults about the Catholic faith are encouraged to get involved with planning and leading our Adult Faith Formation sessions on Sundays.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Small Group Leader",
          description: "Small Groups follow Jesus' example of journeying through life and towards God together with a close group of fellow Christians. Leaders are trained in how to invite members and facililtate group discussions. Meeting times, locations, frequency, and topics/resources are flexible and vary depending on who is in the group, and the parish is able to assist in many of these areas. We are always in need of Small Group Leaders, so if this interests you, please prayerfully consider whether God is calling you to lead your parish community in this way.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Middle School Adult Ministry Team",
          description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our middle schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
          leader: "Amanda Martin",
          contact: "amartin@okaloosapa.com, 850-581-2556"
        },
        {
          name: "High School Adult Ministry Team",
          description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our high schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Order of Christian Initiation for Adults (OCIA) Sponsor",
          description: "A sponsor is an active Catholic that is willing to be a companion to an OCIA student as they go through the process of becoming Catholic. Sponsors attend class with students, meet or talk with them to answer questions and walk with them on their journey of faith.",
          leader: "Tom Lehmann",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Order of Christian Initiation for Adults (OCIA) Catechist Team",
          description: "Those who are knowledgable in their faith and who are interested in sharing Jesus with those who are considering becoming Catholic are encouraged to join the OCIA Catechist Team. Catechists assist in planning and teaching weekly lessons.",
          leader: "Tom Lehmann",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Vacation Bible School (VBS) Volunteer",
          description: "Volunteers are needed to help with our annual summer VBS program. Opportunites for service include leading and teaching the program content and activities, serving as an aide to supervise children, making decorations to transform spaces and classrooms, and/or cleanup.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Young Adult Ministry",
          description: "Volunteers and leaders in this ministry help with scheduling, organizing, promoting, and running Young Adult Ministry activities and events. According to the United States Conference of Catholic Bishops, \"Young adults are persons in their late teens, twenties, and thirties who represent diverse cultural, racial, ethnic, educational, vocational, social, political, and spiritual backgrounds. They are college students, workers, and professionals; they are persons in military service; they are single, married, divorced, or widowed; they are with or without children; they are newcomers in search of a better life.\"",
          leader: "Tyler Acosta",
          contact: "music@saintpeter.me, 850-581-2556"
        },
        {
          name: "St. Paul Street Evangelization",
          description: "St. Paul Street Evangelization is an organization that equips Catholics to evangelize at local events. Their simple, non-confrontational method involves praying with people and handing out Rosaries. Anyone in the parish is welcome to join the parish Street Team: men, women, and families can all get involved.",
          leader: "Tyler Acosta",
          contact: "music@saintpeter.me, 850-581-2556"
        }
      ],
      local: [],
    },
    {
      gift: 'Wisdom',
      score: 0,
      description: "Some individuals have an understanding of God’s will and work as it relates to the living of life. To exercise the gift of wisdom is to help others to discover the wisdom they have within them. This gift involves knowledge of God and of Scripture, discernment of God’s will, and skill in analyzing the problems and dilemmas of life. Sirach 1:14-19, James 3:13-17, Ecclesiastes 9:13-18",
      parish: [
        {
          name: "Order of Christian Initiation for Adults (OCIA) Sponsor",
          description: "A sponsor is an active Catholic that is willing to be a companion to an OCIA student as they go through the process of becoming Catholic. Sponsors attend class with students, meet or talk with them to answer questions and walk with them on their journey of faith.",
          leader: "Tom Lehmann",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Outreach to Parish Homebound/Elderly",
          description: "This ministry is for those who to assist, talk with, and pray with the homebound and elderly in our parish.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Small Group Leader",
          description: "Small Groups follow Jesus' example of journeying through life and towards God together with a close group of fellow Christians. Leaders are trained in how to invite members and facililtate group discussions. Meeting times, locations, frequency, and topics/resources are flexible and vary depending on who is in the group, and the parish is able to assist in many of these areas. We are always in need of Small Group Leaders, so if this interests you, please prayerfully consider whether God is calling you to lead your parish community in this way.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Elementary Faith Formation - Catechist, Aide, Teen Aide, Catechist Substitute",
          description: "Volunteers are needed to share their gift of faith with the children of our parish (VPK through 5th grade) during the school year. Classes meet on Sundays, from 9:15-10:15 a.m. Catechists plan and lead lessons, and are supported in the classroom by Aides and Teen Aides. In addition to these three positions, there is a need for Catechist Substitutes to fill in as needed.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Middle School Adult Ministry Team",
          description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our middle schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
          leader: "Amanda Martin",
          contact: "amartin@okaloosapa.com, 850-581-2556"
        },
        {
          name: "High School Adult Ministry Team",
          description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our high schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Adult Faith Formation",
          description: "Those with a passion for teaching other adults about the Catholic faith are encouraged to get involved with planning and leading our Adult Faith Formation sessions on Sundays.",
          leader: "Rochelle Heidbreder",
          contact: "flc@saintpeter.me, 850-581-2556"
        },
        {
          name: "Young Adult Ministry",
          description: "Volunteers and leaders in this ministry help with scheduling, organizing, promoting, and running Young Adult Ministry activities and events. According to the United States Conference of Catholic Bishops, \"Young adults are persons in their late teens, twenties, and thirties who represent diverse cultural, racial, ethnic, educational, vocational, social, political, and spiritual backgrounds. They are college students, workers, and professionals; they are persons in military service; they are single, married, divorced, or widowed; they are with or without children; they are newcomers in search of a better life.\"",
          leader: "Tyler Acosta",
          contact: "music@saintpeter.me, 850-581-2556"
        },
        {
          name: "St. Paul Street Evangelization",
          description: "St. Paul Street Evangelization is an organization that equips Catholics to evangelize at local events. Their simple, non-confrontational method involves praying with people and handing out Rosaries. Anyone in the parish is welcome to join the parish Street Team: men, women, and families can all get involved.",
          leader: "Tyler Acosta",
          contact: "music@saintpeter.me, 850-581-2556"
        },
        {
          name: "Parish Office Volunteer",
          description: "This ministry is for those who are able to serve the parish by helping out at the Office. Volunteers assist with clerical work and are trained to answer phone calls to the church.",
          leader: "Ana Livoti-Fails",
          contact: "office@saintpeter.me, 850-581-2556"
        },
        {
          name: "Stewardship Committee",
          description: "This committee assists in communicating the parish's vision for stewardship throughout the parish, and organizes the annual Ministry Fair.",
          leader: "the Parish Office",
          contact: "office@saintpeter.me, 850-581-2556"
        }
      ],
      local: [],
    },
  ]);

  const handleRadioChange = (value: string, selectedScore: number) => {
    setSelectedValue(value);
    setScore(selectedScore);
  };

  const questions = [
    {
      id: 0,
      statement: 'I find great joy in leading people to accomplish goals.',
      type: 'Administration',
    },
    {
      id: 1,
      statement:
        'I feel called to be a leader in the church.',
      type: 'Apostleship',
    },
    {
      id: 2,
      statement:
        'I look for opportunities to assist people who have trouble taking care of themselves.',
      type: 'Caregiving',
    },
    {
      id: 3,
      statement:
        'I find the repair and maintenance of things in my environment come easily to me.',
      type: 'Craftsmanship',
    },
    {
      id: 4,
      statement:
        'I find it easy to perceive whether what a person is doing is honest or dishonest.',
      type: 'Discernment',
    },
    {
      id: 5,
      statement:
        'I enjoy sharing about God with people who are not church-goers.',
      type: 'Evangelization',
    },
    {
      id: 6,
      statement: 'I enjoy motivating people to a higher spiritual commitment.',
      type: 'Encouragement',
    },
    {
      id: 7,
      statement:
        'I try to do God’s will, even when it’s not the popular thing to do.',
      type: 'Faith',
    },
    {
      id: 8,
      statement:
        'It is satisfying to me to give generously of my money for God’s work.',
      type: 'Generosity',
    },
    {
      id: 9,
      statement:
        'I enjoy the opportunity to pray with and for a person who is physically ill.',
      type: 'Healing',
    },
    {
      id: 10,
      statement:
        'I like having people in my home.',
      type: 'Hospitality',
    },
    {
      id: 11,
      statement:
        'I feel great compassion for the problems of others.',
      type: 'Mercy',
    },
    {
      id: 12,
      statement:
        'I adapt easily in a culture different from mine.',
      type: 'Mission',
    },
    {
      id: 13,
      statement:
        'I like to sing hymns and songs either alone or with other people.',
      type: 'Musicianship',
    },
    {
      id: 14,
      statement:
        'I am quick to pitch in and help out.',
      type: 'Servant Leadership',
    },
    {
      id: 15,
      statement:
        'I am ready to try the impossible, because I have great trust in God.',
      type: 'Trust',
    },
    {
      id: 16,
      statement:
        'I like to talk about spirituality with other Christians.',
      type: 'Prophet',
    },
    {
      id: 17,
      statement:
        'I enjoy doing “chores” around the church.',
      type: 'Service',
    },
    {
      id: 18,
      statement:
        'I’m excited about helping people discover important insights in the Scriptures and the teachings of the Church.',
      type: 'Teacher',
    },
    {
      id: 19,
      statement:
        'I communicate easily with people of a different culture or language background.',
      type: 'Communication',
    },
    {
      id: 20,
      statement:
        'People with spiritual problems have come to me for advice and counsel.',
      type: 'Wisdom',
    },
    {
      id: 21,
      statement:
        'People seem to enjoy following my leadership in undertaking an important work.',
      type: 'Administration',
    },
    {
      id: 22,
      statement:
        'I feel that God gives me wisdom in leading people in spiritual matters.',
      type: 'Apostleship',
    },
    {
      id: 23,
      statement:
        'I enjoy helping with emergency tasks around the Church.',
      type: 'Caregiving',
    },
    {
      id: 24,
      statement:
        'I have enjoyed creating various kinds of arts and/or crafts.',
      type: 'Craftsmanship',
    },
    {
      id: 25,
      statement:
        'I have a knack for bringing out the best in others.',
      type: 'Encouragement',
    },
    {
      id: 26,
      statement:
        'I’m willing to keep trying, even when a task is tedious and seems unending.',
      type: 'Faith',
    },
    {
      id: 27,
      statement:
        'I have prayed with a person who was in distress, and the person was comforted.',
      type: 'Healing',
    },
    {
      id: 28,
      statement:
        'I pray for others often and for significant periods of time.',
      type: 'Intercession',
    },
    {
      id: 29,
      statement:
        'Through study I have learned many helpful insights.',
      type: 'Knowledge',
    },
    {
      id: 30,
      statement:
        'Visiting people in retirement homes or the hospital gives me great satisfaction.',
      type: 'Mercy',
    },
    {
      id: 31,
      statement:
        'It is easy for me to move into a new community and make friends.',
      type: 'Mission',
    },
    {
      id: 32,
      statement:
        'God has given me the ability to sing and/or play a musical instrument, and I enjoy it.',
      type: 'Musicianship',
    },
    {
      id: 33,
      statement:
        'I notice needs in my parish, and I step up to help fill them.',
      type: 'Servant Leadership',
    },
    {
      id: 34,
      statement:
        'I am often ready to believe God will lead us through a situation which others feel is impossible.',
      type: 'Trust',
    },
    {
      id: 35,
      statement:
        'I enjoy doing routine tasks for the glory of God.',
      type: 'Service',
    },
    {
      id: 36,
      statement:
        'I have enjoyed teaching individuals and/or classes.',
      type: 'Teacher',
    },
    {
      id: 37,
      statement:
        'I enjoy helping others to find solutions to difficult problems in life.',
      type: 'Wisdom',
    },
    {
      id: 38,
      statement:
        'I like to organize people for more effective ministry.',
      type: 'Administration',
    },
    {
      id: 39,
      statement:
        'I have little fear in leading people in spiritual matters.',
      type: 'Apostleship',
    },
    {
      id: 40,
      statement:
        'I don\'t mind helping people who are sick or disabled.',
      type: 'Caregiving',
    },
    {
      id: 41,
      statement:
        'I like to create things with my hands.',
      type: 'Craftsmanship',
    },
    {
      id: 42,
      statement:
        'I seem to have a knack for sensing the difference between truth and error.',
      type: 'Discernment',
    },
    {
      id: 43,
      statement:
        'I am drawn to share my faith in God with others.',
      type: 'Evangelization',
    },
    {
      id: 44,
      statement:
        'I like to encourage inactive church members to become involved again.',
      type: 'Encouragement',
    },
    {
      id: 45,
      statement:
        'I am sure of God’s loving presence, even when things go wrong.',
      type: 'Faith',
    },
    {
      id: 46,
      statement:
        'I appreciate the opportunity to give of my skills and energy in a critical situation.',
      type: 'Generosity',
    },
    {
      id: 47,
      statement:
        'People seem very comfortable in my home.',
      type: 'Hospitality',
    },
    {
      id: 48,
      statement:
        'God consistently answers my prayers in tangible ways.',
      type: 'Intercession',
    },
    {
      id: 49,
      statement:
        'I have learned much about God from Scripture, books and observing life.',
      type: 'Knowledge',
    },
    {
      id: 50,
      statement:
        'I experience joy in comforting people in difficult situations.',
      type: 'Mercy',
    },
    {
      id: 51,
      statement:
        'I am able to relate to and communicate with people of different locations or cultures.',
      type: 'Mission',
    },
    {
      id: 52,
      statement:
        'I have enjoyed being involved with Church, school and/or local musical productions.',
      type: 'Musicianship',
    },
    {
      id: 53,
      statement:
        'I believe that when I am doing God’s will, God can and does work through me.',
      type: 'Trust',
    },
    {
      id: 54,
      statement:
        'I enjoy relating God’s Word to the issues of the day and sharing this with others.',
      type: 'Prophet',
    },
    {
      id: 55,
      statement:
        'When there is something to be done for the church, I\'m glad to help, but I don\'t want to be in charge.',
      type: 'Service',
    },
    {
      id: 56,
      statement:
        'It seems that people learn readily when I teach them.',
      type: 'Teacher',
    },
    {
      id: 57,
      statement:
        'I can communicate well with people who are limited by a physical or mental handicap.',
      type: 'Communication',
    },
    {
      id: 58,
      statement:
        'I seem to be able to help people find the truths they seek.',
      type: 'Wisdom',
    },
    {
      id: 59,
      statement:
        'I have helped people to discover God’s will in their lives.',
      type: 'Discernment',
    },
    {
      id: 60,
      statement:
        'I have sometimes shared spiritual experiences with a neighbor who doesn\'t attend church.',
      type: 'Evangelization',
    },
    {
      id: 61,
      statement:
        'People who are feeling perplexed often come to me for encouragement and comfort.',
      type: 'Encouragement',
    },
    {
      id: 62,
      statement:
        'If I cannot give money to support God’s work, I try to give generously of my time.',
      type: 'Generosity',
    },
    {
      id: 63,
      statement:
        'I feel peace when I am with a person who is sick or injured.',
      type: 'Healing',
    },
    {
      id: 64,
      statement:
        'When missionaries or church leaders come to our church I like (or would like) to have them come to my home.',
      type: 'Hospitality',
    },
    {
      id: 65,
      statement:
        'I faithfully pray for others recognizing that their effectiveness and total well-being depends on God.',
      type: 'Intercession',
    },
    {
      id: 66,
      statement:
        'Knowledge of the Bible and of Church teachings helps me to solve problems in daily life and in the life of the Church.',
      type: 'Knowledge',
    },
    {
      id: 67,
      statement:
        'I feel secure that my musical ability will be of benefit to the people with whom I come in contact.',
      type: 'Musicianship',
    },
    {
      id: 68,
      statement:
        'People often ask for my help with solving problems.',
      type: 'Servant Leadership',
    },
    {
      id: 69,
      statement:
        'People seem to think of me as one who believes that with God everything is possible.',
      type: 'Trust',
    },
    {
      id: 70,
      statement:
        'It is important for me to speak out against wrong when I see it in the world.',
      type: 'Prophet',
    },
    {
      id: 71,
      statement:
        'One of the joys of my ministry is training people to live out their faith more effectively.',
      type: 'Teacher',
    },
    {
      id: 72,
      statement:
        'I can understand and communicate specialized or technical information.',
      type: 'Communication',
    },
    {
      id: 73,
      statement:
        'I feel that I have insight in selecting workable alternatives in difficult situations.',
      type: 'Wisdom',
    },
    {
      id: 74,
      statement:
        'When I am in a disorganized group, I tend to be the first one to step forward to get us organized.',
      type: 'Administration',
    },
    {
      id: 75,
      statement:
        'I enjoy training the volunteers and even the staff in the parish.',
      type: 'Apostleship',
    },
    {
      id: 76,
      statement:
        'If a family is facing a serious crisis, I enjoy the opportunity to help them.',
      type: 'Caregiving',
    },
    {
      id: 77,
      statement:
        'I find pleasure in designing, creating and building things.',
      type: 'Craftsmanship',
    },
    {
      id: 78,
      statement:
        'I often look beneath the surface and discover richer meanings.',
      type: 'Discernment',
    },
    {
      id: 79,
      statement:
        'I feel a deep concern for the people in my community who are not coming to Church.',
      type: 'Evangelization',
    },
    {
      id: 80,
      statement:
        'Even when it seems that my prayers are not answered, I keep praying.',
      type: 'Faith',
    },
    {
      id: 81,
      statement:
        'I give sacrificially of my time, talents and resources because I know that God will meet my needs.',
      type: 'Generosity',
    },
    {
      id: 82,
      statement:
        'I feel strongly that my prayers for a sick person are important.',
      type: 'Healing',
    },
    {
      id: 83,
      statement:
        'I have opened my home to someone in need.',
      type: 'Hospitality',
    },
    {
      id: 84,
      statement:
        'I find myself praying even while I am doing other things.',
      type: 'Intercession',
    },
    {
      id: 85,
      statement:
        'I find in-depth study of the Bible or Church teaching to be fulfilling.',
      type: 'Knowledge',
    },
    {
      id: 86,
      statement:
        'I find great satisfaction in visiting people who are confined to their homes.',
      type: 'Mercy',
    },
    {
      id: 87,
      statement:
        'I have a strong desire to meet people of other communities and countries to talk about our respective understandings of God.',
      type: 'Mission',
    },
    {
      id: 88,
      statement:
        'I enjoy a close relationship with people in a one to one situation.',
      type: 'Servant Leadership',
    },
    {
      id: 89,
      statement:
        'I feel called to stand up for what is right even if it irritates others.',
      type: 'Prophet',
    },
    {
      id: 90,
      statement:
        'I like to do things without attracting much attention.',
      type: 'Service',
    },
    {
      id: 91,
      statement:
        'I have a knack for foreign languages, ASL or Braille.',
      type: 'Communication',
    }
  ];

  const parishOpps = [
    {
      name: "Adult Faith Formation",
      description: "Those with a passion for teaching other adults about the Catholic faith are encouraged to get involved with planning and leading our Adult Faith Formation sessions on Sundays.",
      leader: "Rochelle Heidbreder",
      contact: "flc@saintpeter.me, 850-581-2556"
    },
    {
      name: "Altar Linen Cleaner",
      description: "Volunteers are needed to assist with regular cleaning, folding, and storage of Altar Linens.",
      leader: "Rose DeCotis",
      contact: "office@saintpeter.me, 850-581-2556"
    },
    {
      name: "Altar Server",
      description: "This ministry assists in the liturgical life of the parish during weekend Masses. Serving instills a sense of responsibility to the church and also enhances a personal relationship with Jesus as our youth take part in the Mass in such an intimate way. This ministry is open to anyone who has received the Sacraments of Baptism and First Holy Communion and is able to carry out all of the duties required. You will be trained in the duties and responsibilities of the ministry and will be asked to arrive 20 minutes before Mass begins.",
      leader: "Deacon Tony DeCotis",
      contact: "deacon@saintpeter.me, 850-581-2556"
    },
    {
      name: "Cantor",
      description: "Cantors are singers interested in guiding the congregation in prayer and worship through song. They must have some singing talent and be able or willing to learn to lead a large assembly comfortably. We are always in need of cantors, who can volunteer to sing as frequently or infrequently as they like.",
      leader: "Tyler Acosta",
      contact: "music@saintpeter.me, 850-581-2556"
    },
    {
      name: "Coffee and Donuts Ministry",
      description: "Volunteers are needed to help pick up donuts, brew coffee, set up tables, serve Coffee and Donuts, and clean up afterwards, which involves some work before and after one of our Sunday Masses.",
      leader: "the Parish Office",
      contact: "office@saintpeter.me, 850-581-2556"
    },
    {
      name: "Elementary Faith Formation - Catechist, Aide, Teen Aide, Catechist Substitute",
      description: "Volunteers are needed to share their gift of faith with the children of our parish (VPK through 5th grade) during the school year. Classes meet on Sundays, from 9:15-10:15 a.m. Catechists plan and lead lessons, and are supported in the classroom by Aides and Teen Aides. In addition to these three positions, there is a need for Catechist Substitutes to fill in as needed.",
      leader: "Rochelle Heidbreder",
      contact: "flc@saintpeter.me, 850-581-2556"
    },
    {
      name: "Extraordinary Minister of Holy Communion (EMHC)",
      description: "Extraordinary Ministers of Holy Communion are trained to assist the priest in the distribution of Holy Communion at Mass under extraordinary circumstances, and to bring communion to the sick or aged.",
      leader: "Father Doug Martin",
      contact: "pastor@saintpeter.me, 850-581-2556"
    },
    {
      name: "Grounds Beautification Ministry",
      description: "This ministry is for those who are able to help with planting, landscaping, and similar outdoor tasks to help keep our parish ground beautiful.",
      leader: "Alicia Graham",
      contact: "office@saintpeter.me, 850-581-2556"
    },
    {
      name: "High School Adult Ministry Team",
      description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our high schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
      leader: "Rochelle Heidbreder",
      contact: "flc@saintpeter.me, 850-581-2556"
    },
    {
      name: "Instrumentalist",
      description: "Instrumentalists assist in leading the congregation in prayer and worship by offering their instrumental talents to the community. We are always in need of orchestral instrument players with some talent or experience at our weekend Masses, and especially for higher feasts like Christmas and Easter.",
      leader: "Tyler Acosta",
      contact: "music@saintpeter.me, 850-581-2556"
    },
    {
      name: "Knights of Columbus Council 8910",
      description: "The Knights of Columbus is a brotherhood of Catholic men 18 years of age and older who each play a part in improving the community. We stand together in faith, and are dedicated to upholding the principles of charity, unity, fraternity and patriotism while lending support and strength to our parish, home, community, and fellow Knights. Activities at St. Peter include planning and assisting at fundraisers, including Pancake Breakfasts and Lenten Fish Fries.",
      leader: "Jason Heidbreder",
      contact: "jasonheidbreder@yahoo.com, 850-581-2556"
    },
    {
      name: "Lazarus Ministry",
      description: "This ministry assists with setting up for funeral receptions to help comfort those who are mourning.",
      leader: "Rochelle Heidbreder",
      contact: "flc@saintpeter.me, 850-581-2556"
    },
    {
      name: "Maintenance Volunteer",
      description: "We are always looking for volunteers with experience in painting, plumbing, carpentry, and similar repair/maintenance areas to help with various projects at the church.",
      leader: "John Fails",
      contact: "maintenance@saintpeter.me, 850-581-2556"
    },
    {
      name: "Middle School Adult Ministry Team",
      description: "This ministry is for those who have a gift for Youth Ministry and would like to help with teaching our middle schoolers. The Team meets on Sunday afternoons to plan and teach lessons and activities for Sunday evening Youth Group.",
      leader: "Amanda Martin",
      contact: "amartin@okaloosapa.com, 850-581-2556"
    },
    {
      name: "Nursery/Childcare Volunteer",
      description: "We are always in need of volunteers to help in the Nursery on Sundays, and to help with Childcare for various parish events. Volunteers undergo a Diocesan background check and video training.",
      leader: "Rochelle Heidbreder",
      contact: "flc@saintpeter.me, 850-581-2556"
    },
    {
      name: "Outreach to Parish Homebound/Elderly",
      description: "This ministry is for those who to assist, talk with, and pray with the homebound and elderly in our parish.",
      leader: "the Parish Office",
      contact: "office@saintpeter.me, 850-581-2556"
    },
    {
      name: "Order of Christian Initiation for Adults (OCIA) Catechist Team",
      description: "Those who are knowledgable in their faith and who are interested in sharing Jesus with those who are considering becoming Catholic are encouraged to join the OCIA Catechist Team. Catechists assist in planning and teaching weekly lessons.",
      leader: "Tom Lehmann",
      contact: "office@saintpeter.me, 850-581-2556"
    },
    {
      name: "Order of Christian Initiation for Adults (OCIA) Sponsor",
      description: "A sponsor is an active Catholic that is willing to be a companion to an OCIA student as they go through the process of becoming Catholic. Sponsors attend class with students, meet or talk with them to answer questions and walk with them on their journey of faith.",
      leader: "Tom Lehmann",
      contact: "office@saintpeter.me, 850-581-2556"
    },
    {
      name: "Parish Dinners",
      description: "This ministry assists with planning, setting up for, and cleaning up after dinner events and parish potlucks.",
      leader: "Rochelle Heidbreder",
      contact: "flc@saintpeter.me, 850-581-2556"
    },
    {
      name: "Parish Library Volunteer",
      description: "Library Volunteers maintain the Parish Library, process book donations, and assist parishioners with checking out physical and digital materials.",
      leader: "Judy Holzschuh",
      contact: "library@saintpeter.me, 850-581-2556"
    },
    {
      name: "Parish Office Volunteer",
      description: "This ministry is for those who are able to serve the parish by helping out at the Office. Volunteers assist with clerical work and are trained to answer phone calls to the church.",
      leader: "Ana Livoti-Fails",
      contact: "office@saintpeter.me, 850-581-2556"
    },
    {
      name: "Prayer Chain",
      description: "The Prayer Chain is for those who wish to receive emails about urgent prayer needs in the parish so that they can pray for those in great need.",
      leader: "the Parish Office",
      contact: "office@saintpeter.me, 850-581-2556"
    },
    {
      name: "Reader",
      description: "Readers proclaim the living Word of God at Mass and lead the General Intercessions when the deacon is not present. A team of two ministers proclaim Holy Scripture at each weekend Mass, while one Reader is required for daily Mass. Qualifications for a Reader are a love of the Word of God, a pleasant speaking voice and reasonable comfort speaking before a crowd. Techniques can be learned, but a desire to proclaim the Word comes from within. Readers carefully study and practice the assigned reading prior to serving. Training is required.",
      leader: "Deacon Tony DeCotis",
      contact: "deacon@saintpeter.me, 850-581-2556"
    },
    {
      name: "Sacristan",
      description: "Sacristans prepare the sanctuary for the celebration of one Mass on weekends and Holy Days of Obligation. They work quietly behind-the-scenes to ensure that liturgies run smoothly, preparing the sacred vessels needed for liturgy, and cleaning and putting away all items afterwards. They also make sure all the other liturgical ministries are covered by those scheduled, or find substitutes. Screening and training is required.",
      leader: "Rose DeCotis",
      contact: "office@saintpeter.me, 850-581-2556"
    },
    {
      name: "Seasonal Christmas/Easter Choir",
      description: "If you have some singing talent or experience, please prayefully consider joining our Seasonal Choir to sing for Christmas and/or Easter. Christmas Choir rehearsals usually begin around the First Sunday of Advent, and Easter Choir rehearsals usually begin around the First Sunday of Lent.",
      leader: "Tyler Acosta",
      contact: "music@saintpeter.me, 850-581-2556"
    },
    {
      name: "Seasonal Decorating",
      description: "This ministry is for those who would like to help decorate the Church for different liturgical seasons and feasts (Christmas, Easter, Lent, Advent, etc.).",
      leader: "Ana Livoti-Fails",
      contact: "office@saintpeter.me, 850-581-2556"
    },
    {
      name: "Small Group Leader",
      description: "Small Groups follow Jesus' example of journeying through life and towards God together with a close group of fellow Christians. Leaders are trained in how to invite members and facililtate group discussions. Meeting times, locations, frequency, and topics/resources are flexible and vary depending on who is in the group, and the parish is able to assist in many of these areas. We are always in need of Small Group Leaders, so if this interests you, please prayerfully consider whether God is calling you to lead your parish community in this way.",
      leader: "Rochelle Heidbreder",
      contact: "flc@saintpeter.me, 850-581-2556"
    },
    {
      name: "Stewardship Committee",
      description: "This committee assists in communicating the parish's vision for stewardship throughout the parish, and organizes the annual Ministry Fair.",
      leader: "the Parish Office",
      contact: "office@saintpeter.me, 850-581-2556"
    },
    {
      name: "Usher/Greeter",
      description: "Ushers greet parishioners and open the doors for the weekend Masses. They also assist with seating, collecting the offertory, handing out bulletins and straightening up the pews after Mass. Greeters make the first experience of our parish a positive one with a warm welcome and a friendly smile. This ministry provides a link to what is happening in the parish community by being available before and after the Mass to answer questions and share current events.",
      leader: "Tere Brenci",
      contact: "office@saintpeter.me, 850-581-2556"
    },
    {
      name: "Vacation Bible School (VBS) Volunteer",
      description: "Volunteers are needed to help with our annual summer VBS program. Opportunites for service include leading and teaching the program content and activities, serving as an aide to supervise children, making decorations to transform spaces and classrooms, and/or cleanup.",
      leader: "Rochelle Heidbreder",
      contact: "flc@saintpeter.me, 850-581-2556"
    },
    {
      name: "Weekly Collection Counters",
      description: "Volunteers are needed to help on Monday mornings with counting the Offertory collections from the past weekend.",
      leader: "Paul Johansen",
      contact: "finance@saintpeter.me, 850-581-2556"
    },
    {
      name: "Weekend Choir",
      description: "Open to adults, youth and children with some singing talent or experience, choir members offer their voices in service to the parish for Sunday Mass and for other special feasts. Choir members are welcome to sing at any or all of our weekend Masses - 5pm Saturday Vigil, 8am Sunday Mass, and 10:30am Sunday Mass. Rehearsals take place 45 minutes prior to each Mass.",
      leader: "Tyler Acosta",
      contact: "music@saintpeter.me, 850-581-2556"
    },
    {
      name: "Weekend Church Prep",
      description: "This ministry is for those who are able to assist at one of our weekend Masses in preparing the church before Mass.",
      leader: "the Parish Office",
      contact: "office@saintpeter.me, 850-581-2556"
    },
    {
      name: "Young Adult Ministry",
      description: "Volunteers and leaders in this ministry help with scheduling, organizing, promoting, and running Young Adult Ministry activities and events. According to the United States Conference of Catholic Bishops, \"Young adults are persons in their late teens, twenties, and thirties who represent diverse cultural, racial, ethnic, educational, vocational, social, political, and spiritual backgrounds. They are college students, workers, and professionals; they are persons in military service; they are single, married, divorced, or widowed; they are with or without children; they are newcomers in search of a better life.\"",
      leader: "Tyler Acosta",
      contact: "music@saintpeter.me, 850-581-2556"
    },
    {
      name: "Youth Night Kitchen Team",
      description: "The Youth Night Kitchen Team meets on Sunday afternoons before Youth Nights to cook dinner for the attendees.",
      leader: "Rochelle Heidbreder",
      contact: "flc@saintpeter.me, 850-581-2556"
    },
  ];

  const localOpps = [
    {
      name: "Catholic Charities of Northwest Florida",
      description: "Catholic Charities of Northwest Florida serves, empowers, and advocates for impoverished and vulnerable families and individuals of any race, religion or national origin across the Florida Panhandle. Volunteers are needed to help at the Food Pantry, which operates from 9am-12pm Mondays through Thursdays, and to help distribute lunches from 12:30-4pm, also Mondays through Thursdays. Volunteers are also needed to help in the office with administrative tasks. These opportunites are generally for adults, but families with children may also be able to assist.",
      leader: "Catholic Charities of Northwest Florida's Fort Walton Beach Office",
      contact: "850-244-2825"
    },
    {
      name: "Food For Thought",
      description: "Food For Thought is the go-to organization for fighting childhood hunger in Walton and Okaloosa Counties. Opportunities are available for volunteers of all ages. Every Tuesday, volunteers can assist with packing food in Destin (908 Airport Rd, Destin, FL 32541) and Santa Rosa Beach (132 Market St, Santa Rosa Beach, FL 32459). Every Wednesday, volunteers can assist with curbside service, mornings and/or evenings. Volunteers must complete paperwork and in-person training to get started.",
      leader: "Food For Thought",
      contact: "volunteer@fftfl.org, 850-290-4056"
    },
    {
      name: "Fort Walton Beach Center for Women",
      description: "The Fort Walton Beach Center for Women provides free and confidential services and information to pregnant women in Okaloosa County, and has various volunteer opportunities available for those who desire to share in this mission. Clients are served without regard to age, race, income, nationality, religious affiliation, disability or other arbitrary circumstances.",
      leader: "the Fort Walton Beach Center for Women",
      contact: "850-862-9020 between 9am and 12pm on Mondays and Wednesdays"
    },
    {
      name: "Habitat For Humanity in Okaloosa County",
      description: "Habitat for Humanity Okaloosa County welcomes people from all walks of life to join them as they build affordable, safe homes in partnership with families in need. There are opportunities for Construction Volunteers, ReStore Volunteers, Special Event Volunteering and Youth Volunteers.",
      leader: "the Habitat For Humanity in Okaloosa County Volunteer Coordinator",
      contact: "volunteer@habitatfwb.org, 850-315-0025"
    },
    {
      name: "Opportunity Place",
      description: "Opportunity Place provides safe shelter, supportive services, and resources for the chronically homeless and for those experiencing homelessness due to a negative event or situation that occurred in their lives. Opportunity Place hosts Youth Nights every Tuesday and Thursday night from 5:30pm to 7pm, where volunteers come in and engage in activities with the children in the shelter. Friday morning volunteers are needed to answer the phone with shelter support. Volunteers fill out an application and are then added to a newsletter with information on new volunteer opportunities.",
      leader: "Opportunity Place",
      contact: "info@opifwb.org, 850-659-3190"
    },
    {
      name: "Pregnancy Resource Center of Navarre",
      description: "The Pregnancy Resource Center of Navarre provides free and confidential services and information to pregnant women in the Emerald Coast. Clients are served without regard to age, race, income, nationality, religious affiliation, disability or other arbitrary circumstances. Volunteers with skills in standard office software (Microsoft Word, Excel, etc.) are always needed to help with office work, as well as volunteers to help manage the organization's social media. Adult women (early 20s and up) with a passion for helping pregnant mothers in need are encouraged to become Client Advocates, who are trained to talk with and assist clients.",
      leader: "the Pregnancy Resource Center of Navarre",
      contact: "850-515-0334"
    },
    {
      name: "Prison Ministry",
      description: "This ministry answers Jesus' call to visit the imprisoned, and involves being available to talk and pray with the inmates. Volunteers undergo a background check and similar screening through the Okaloosa County Prison System.",
      leader: "Deacon Tony DeCotis",
      contact: "deacon@saintpeter.me, 850-581-2556"
    },
    {
      name: "Shelter House",
      description: "Shelter House provides shelter, intervention and primary prevention programs to the community through education, awareness and advocating for social change. Volunteers that wish to work closely with participants or work on the 24-hour hotline are required to attend a 30-hour Core Competency Training. This is a 24-hour class (three full days) in addition to six hours of observation. Volunteers on the Rape Response Team (RRT) must complete Advocacy Core Training, which includes self-led online training, role playing and on-the-job training. For those not interested in direct service, opportunities include sorting through donations, collecting cell phones in the community, promoting and working events and fundraisers, handing out brochures and flyers, picking up donations, assisting with administrative duties, and much more. Opportunities for groups are also available. Your business, religious organization, youth group or other organization can work together for a group project.",
      leader: "the Shelter House Volunteer Coordinator",
      contact: "volunteer@shelterhousenwfl.org, 850-243-1201"
    },
  ];

  const skipQuiz = () => {
    setIsSkipped(true);
    setIsFinished(true);
    setIsStarted(true);
  }

  const startQuiz = () => {
    setIsStarted(true);
  }

  const goHome = () => {
    setIsSkipped(false);
    setIsFinished(false);
    setIsStarted(false);
  }

  const submitAnswer = () => {
    if (selectedValue === 'none') {
      setError(true);
      return;
    }
    setError(false);

    let newScores = giftScores;
    try {
      newScores.find(item => {
        return item.gift == questions[currentQuestion].type;
      })!.score += score;
    } catch (error) {
      console.error(error);
    }
    
    setGiftScores(newScores);
    setScore(0);
    setSelectedValue('none');
    if (currentQuestion + 1 == questions.length) {
      setIsFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  if(!isStarted) {
    return (
      <>
        <p>The Spiritual Gifts Assessment is meant to help you discern your spiritual gifts and how to use them.</p>
        <p>The assessment has 92 prompts, and takes about 10-15 minutes to complete.</p>
        <p>Your responses are anonymous, and are not stored or shared.</p>
        <button className="btn-green" onClick={() => startQuiz()}>Start Assessment</button>
        <br />
        <p>Alternatively, you can use the button below to view a List of Ministries and Service Opportunities.</p>
        <button className="btn-blue" onClick={() => skipQuiz()}>View List</button>
      </>
    )
  } else {
    if (!isFinished) {
      var errorMsg;
      if (error) {
        errorMsg = (
          <span className="error-msg">
            Please select one of the above options.
          </span>
        );
      }
      return (
        <>
          <div className="container">
            <h2 id="question">{questions[currentQuestion].statement}</h2>
          </div>
          <form>
            <input
              type="radio"
              id="html"
              name="answers"
              required
              value="0"
              checked={selectedValue === 'option1'}
              onChange={() => handleRadioChange('option1', 0)}
            ></input>
            <label
              htmlFor="0"
              onClick={() => handleRadioChange('option1', 0)}
            >Strongly Disagree</label>
            <br />
            <input
              type="radio"
              id="html"
              name="answers"
              value="1"
              checked={selectedValue === 'option2'}
              onChange={() => handleRadioChange('option2', 1)}
            ></input>
            <label
              htmlFor="1"
              onClick={() => handleRadioChange('option2', 1)}
            >Somewhat Disagree</label>
            <br />
            <input
              type="radio"
              id="html"
              name="answers"
              value="2"
              checked={selectedValue === 'option3'}
              onChange={() => handleRadioChange('option3', 2)}
            ></input>
            <label
              htmlFor="2"
              onClick={() => handleRadioChange('option3', 2)}
            >Neither Agree nor Disagree</label>
            <br />
            <input
              type="radio"
              id="html"
              name="answers"
              value="3"
              checked={selectedValue === 'option4'}
              onChange={() => handleRadioChange('option4', 3)}
            ></input>
            <label
              htmlFor="3"
              onClick={() => handleRadioChange('option4', 3)}
            >Somewhat Agree</label>
            <br />
            <input
              type="radio"
              id="html"
              name="answers"
              value="4"
              checked={selectedValue === 'option5'}
              onChange={() => handleRadioChange('option5', 4)}
            ></input>
            <label
              htmlFor="4"
              onClick={() => handleRadioChange('option5', 4)}
            >Strongly Agree</label>
            <br />
          </form>
          <br />
          <button className="btn-blk" onClick={() => submitAnswer()}>Submit</button>
          <br />
          <br />
          {errorMsg}
        </>
      );
    } else {
      if(!isSkipped) {
        return (
          <>
            <h2>Understanding Your Scores</h2>
            <p><strong>16-13: </strong>You are either doing this, or you should be.</p>
            <p><strong>12-9: </strong>You could easily do this if you want to.</p>
            <p><strong>8-5: </strong>You would have to work hard to do this gracefully.</p>
            <p><strong>4-0: </strong>You would probably not enjoy doing this.</p>
            <p>Your results will disappear when you refresh the page.</p>
            <p>To save them, consider printing this page, taking screenshots, writing down your results, or copying them into a note.</p>
            <button className="btn-blk" onClick={() => window.print()}>Print your results</button>
            <h2>Your Scores:</h2>
            <h3>Click or tap each box for more information.</h3>
            {giftScores.sort((a, b) => b.score - a.score).map((item) => (
              // <h3 className="result-header">{item.gift}: {item.score}</h3>
              <div className="content">
                <div className="list-group list-group-flush">
                  <Collapsible title={item.gift + ": " + item.score}>
                    <br />
                    <p>{item.description}</p>
                    <br />
                    {item.parish.length != 0
                      ? <Collapsible title={"Opportunities at St. Peter"}>
                          {item.parish.map((p) => (
                            <div>
                              <br />
                              <p><strong>{p.name}</strong></p>
                              <p>{p.description}</p>
                              <p>{"For more info, contact " + p.leader + ": " + p.contact}</p>
                            </div>
                          ))}
                          <br />
                        </Collapsible>
                      : null
                    }
                    {item.local.length != 0
                      ? <Collapsible title={"Local/Off-Campus Opportunities"}>
                          {item.local.map((l) => (
                            <div>
                              <br />
                              <p><strong>{l.name}</strong></p>
                              <p>{l.description}</p>
                              <p>{"For more info, contact " + l.leader + ": " + l.contact}</p>
                            </div>
                          ))}
                          <br />
                        </Collapsible>
                      : null
                    }
                  </Collapsible>
                </div>
              </div>
            ))}
            <br />
          </>
        );
      } else {
        return (
          <>
            <h2>List of Ministries and Service Opportunities</h2>
            <p id="skip-click-tap">Click or tap each box for more information.</p>
            <div className="content">
              <div className="list-group list-group-flush">
                <Collapsible title={"Opportunities at St. Peter"}>
                  {parishOpps.map((p) => (
                    <div>
                      <br />
                      <p><strong>{p.name}</strong></p>
                      <p>{p.description}</p>
                      <p>{"For more info, contact " + p.leader + ": " + p.contact}</p>
                    </div>
                  ))}
                  <br />
                </Collapsible>
              </div>
            </div>
            <div className="content">
              <div className="list-group list-group-flush">
                <Collapsible title={"Local/Off-Campus Opportunities"}>
                  {localOpps.map((l) => (
                    <div>
                      <br />
                      <p><strong>{l.name}</strong></p>
                      <p>{l.description}</p>
                      <p>{"For more info, contact " + l.leader + ": " + l.contact}</p>
                    </div>
                  ))}
                  <br />
                </Collapsible>
              </div>
            </div>
            <br />
            <button className="btn-blk" onClick={() => goHome()}>Go Back</button>
            <br />
          </>
        );
      }
    }
  }

}

export default Quiz;
