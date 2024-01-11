<template>
  <div class="container">
    <a-row justify="center">
      <a-col
        :span="6"
        :style="{
          width: '240px',
          height: '360px',
        }"
      >
        <img
          :style="{
            width: '240px',
            height: '360px',
          }"
          :alt="movie?.title ?? ''"
          :src="movie?.posterUrl ?? ''"
        />
      </a-col>
      <a-col :span="18">
        <a-row>
          <a-col>
            <h1 style="margin: 0">{{ movie?.title }}</h1>
            <h3 style="margin-top: 0">{{ movie.originalTitle }}</h3>
          </a-col>

          <a-col style="padding: 15px 0">
            <b>类型：</b>{{ movie?.genre }}
          </a-col>

          <a-col style="padding: 15px 0" :span="6">
            <b>国家/地区：</b>{{ movie?.productionRegion }}
          </a-col>

          <a-col style="padding: 15px 0" :span="14">
            <b>导演：</b>{{ movie?.director }}
          </a-col>

          <a-col style="padding: 15px 0">
            <b>主演：</b>{{ movie?.castAndCrew }}
          </a-col>
          <a-col style="padding: 15px 0; padding-top: 45px" :span="12">
            <a-row>
              <a-col :span="12" style="padding-right: 5px">
                <a-button long @click="handleColor">
                  <template #icon
                    ><icon-heart-fill :style="{ color: heartIconColor }"
                  /></template>
                  想看</a-button
                >
              </a-col>
              <a-col :span="12" style="padding-left: 5px">
                <a-popover>
                  <a-button long>
                    <template #icon><icon-star-fill /></template>评分</a-button
                  >
                  <template #content>
                    <a-rate v-model="form.rating" />
                  </template>
                </a-popover>
              </a-col>
              <a-col style="margin-top: 10px">
                <a-button
                  type="primary"
                  status="danger"
                  long
                  @click="handlePurchase"
                  >{{ btnTitle }}</a-button
                >
              </a-col>
            </a-row>
          </a-col>
          <a-col style="padding: 15px 0" :span="12">
            <a-row>
              <a-col :span="12" align="right" style="padding-right: 20px">
                <a-statistic
                  title="口碑"
                  :value="movie.rating"
                  :value-style="{ color: '#ffc617' }"
                  show-group-separator
                />
              </a-col>
              <a-col :span="12" style="height: 100%" align="center">
                <a-rate
                  :default-value="movie.rating / 2"
                  readonly
                  allow-half
                  style="bottom: 0"
                />
                <br />
                <span> 多少人评分 </span>
              </a-col>
              <a-col :span="12" align="right" style="padding-right: 20px">
                <a-statistic
                  title="票房"
                  :value="movie.boxOffice / 10000"
                  :value-style="{ color: '#ffc617' }"
                  show-group-separator
                >
                  <template #suffix>万</template>
                </a-statistic>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <div v-if="!isPurchase">
      <a-row>
        <a-divider orientation="left">《{{ movie?.title }}》剧情简介</a-divider>
        <a-col class="desc">
          <a-typography-paragraph
            :ellipsis="{
              rows: 3,
              expandable: true,
            }"
          >
            钳工胡建林（大鹏
            饰）在集团裁员之际阴差阳错被调入总部，裹挟在“错调”事件中的人事经理马杰（白客
            饰）为保饭碗被迫为其隐瞒四处周旋。从“工厂”到“大厂”，从“蓝领”变“金领”，胡建林因与大厂环境格格不入而笑料百出，也像一面“职场照妖镜”照出职场众生相......胡建林为何能在裁员之际一路升职加薪制霸大厂？马杰又能否在“错调”事件中全身而退？这场离谱的“错调”背后又隐藏着什么惊天大瓜
          </a-typography-paragraph>
        </a-col>
        <a-divider orientation="left">用户评论</a-divider>
        <a-col align="right">
          <a-textarea
            v-model="form.comment"
            placeholder="请输入评论"
            :auto-size="{
              minRows: 3,
              maxRows: 6,
            }"
            allow-clear
            show-word-limit
          />
          <div class="btn-group">
            <a-button type="primary" @click="handleSubmit">发送</a-button>
          </div>
        </a-col>
      </a-row>
      <a-row>
        <a-card hoverable :style="{ width: '100%', margin: '20px 0' }">
          <div
            :style="{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '10px',
            }"
          >
            <span
              :style="{
                display: 'flex',
                alignItems: 'center',
                color: '#1D2129',
              }"
            >
              <a-avatar
                :style="{ marginRight: '8px', backgroundColor: '#165DFF' }"
              >
                张
              </a-avatar>
              <a-typography-text>张三</a-typography-text>
              <a-rate :default-value="5" readonly style="padding: 0 15px" />
              <a-typography-text disabled>
                2024-12-29 00:00:40
              </a-typography-text>
            </span>
          </div>
          <a-typography-paragraph
            :ellipsis="{
              rows: 3,
              expandable: true,
            }"
          >
            《年会不能停！》我挺喜欢的，不过在谈它之前，先啰嗦点别的。
            这电影给我一种久违的亲切，因为它从属的这种喜剧类别，非常传统又特别小众。
            我一度都以为这年头已经没人拍这种片了。
            这个类别的大致模式是：一个人因为某种原因，被放到不属于他的位置上，却歪打正着搞出一番风波，而结局对他来说也通常是欢天喜地的。
            见过一些学者把这类作品称为错置喜剧，姑且就这么叫吧。
            错置喜剧一般都带着强烈的讽刺性，想讽刺什么，就在前面说的“某种原因”上狂做文章。
            我知道最早的错置喜剧，应该是果戈里的《钦差大臣》，讲一个游手好闲的青年被全镇人当成是钦差大臣，待遇瞬间上天。
            在中国文艺里，最知名的古早作品当属刘宝瑞的单口相声《连升三级》。
            一个不学无术的纨绔子弟，独闯京城儿戏赶考，却意外被认作是魏忠贤的亲信，遭人巴结一路官运亨通，讽刺了明朝官场腐败的生态。
            《年会不能停！》的商业职场题材也不乏先例，个人印象最深的是科恩兄弟导演的《影子大亨》。
            公司高层玩弄权术，把一个小职员扶成傀儡总裁，没想到业务竟然被他经营得蒸蒸日上——你看这个梗概设定是不是跟《年会》挺像的。
            两个片都是一面讽刺资本家的虚伪贪婪，一面赞赏小人物的真诚品德和草根智慧，可谓是吐出了东西方打工人共同的怨气。
            还有一种错置喜剧是往闹剧发展，比如《粉红豹》《糊涂侦探》这种经典的恶搞片，笨拙无能的主角肩负重任，稀里糊涂搞定职业杀手、专业特工，挫败大阴谋，全靠各种无厘头巧合。
            别看剧情胡闹，编剧难度不小，要恰到好处地给反派降智，每集得编出新理由来合理化主角的胜利，从而才能嘲笑严肃谍战片的不切实际。
            我反复强调这类作品不好编，是因为真的难，门槛高，数量少是情理之中。
            不止是华语片，也不止是近年，编剧如果贪图省力出快活，都不愿意啃这种硬茬子，而青睐段子拼盘式的写作。
            比如以前的港片是一群编剧“度桥”，经常无中生有塞一段，不光是喜剧，任何类型都可以杂糅。
            像成龙的《A计划续集》，周星驰的《九品芝麻官》，都有“一群人误打误撞进了同个空间，互相掩护躲藏”的桥段。
            还有各种喜剧里常见的，你说城门楼子，他说小野洋子，每句台词都双关于是驴唇不对马嘴地聊下去，最后说破一拍两散，本身就几乎是一段相声了。
            这种演到位了当然也很有趣，但属于快餐，偶尔吃一顿没啥，顿顿这么来就腻死人。
            而现在许多喜剧被诟病为“段子片”“小品电影”就是这个原因，通篇都是桥段拼盘，甚至主线的起承转合都不顾了。
            下次看喜剧时，你不妨留意一下，是不是有整段笑料删除了也不影响情节的。这种段落越多，整个电影就越接近段子片。
            绕了一大圈，终于又说回《年会》，它的剧本写法就完全是上面那种拼盘思路的反面。
            至少在演到大鹏升职年薪150万的大经理之前，都是紧扣着《连升三级》的经典模式输出。
            高级钳工阴差阳错被提拔到总公司，从K7到K11一路腾达，每次升职加薪都是一次混合了权力斗争和装傻充愣的大型误会游戏。
            情节基本上就是不断变化喜剧的花招，来为“调错的人维持假身份”这个设定服务。
            一环扣一环，牵一发动全身，又得时刻把每个动作布置出双关效果。
            让他瞎搞又显出过人的实力，让他出昏招都转换成妙计，让他说几句大实话都仿佛高深莫测，还得让这一切都有理可循。
            但凡写过剧本，或者拉片分析过喜剧片就知道，这种情节看似天马行空乱来，其实纯属编剧自己给自己找不痛快，发挥空间特别窄，考验非常大。
            写这种喜剧一部耗费的脑力，够写前面那种段子片三四部不止了。
            当然，打磨出来的故事也会非常耐看。
            大鹏整个冒名顶替的过程还分两个阶段。
            前半段是是用尽巧合、会错意、先入为主、谐音、意外、职场规则和角色的某种性格特征，帮大鹏避开一次次穿帮的风险。
            后半段是许多人被这个差错拉下水后，又都为了那点利益小九九，反过来帮着大鹏，劝阻他别穿帮，等于自行颠倒设定反过来演，难度更大。
            后一个阶段是许多错置喜剧没有的，大鹏对名利的陶醉渐渐变成小老鼠上灯台的身不由己，更加清晰呈现了大厂权贵的嘴脸。
            有些笑点有抖机灵的痕迹，但剧本不会停在玩梗的阶段，都穿针引线，把机灵引去别的地方。
            比如大鹏跟白客选英文名，单独来看就是个纯段子，也就是放在某音上作流量宣传的份儿。
            但让你笑一下不算完事，如果大鹏不叫这名，后面的一处关键情节就推进不下去，逻辑会崩盘。
            看似逗个乐的，回头都有照应，这就是段子电影达不到的段位。
            按前面说的，试试给这种剧本动剪刀又不伤主体，是几乎不可能的任务。
            整个电影至少是前面一大半的结构稳固扎实，最多也就是砍掉一两句俏皮话嘴炮什么的，再少东西，戏都连不上了。
            也正因为这种出色，以至于到了高潮，真要搞那个打工人反戈一击的年会了，反而让我觉得有点泄气。
            弄得太过火了，过于露骨地喊出主题，喊了太多太久，就显得中二起来。
            那种不加节制的宣泄、感动和励志，跟前面含蓄、狡黠又辛辣的讽刺，也完全像是两个世界的东西。
            其实要讲励志，早在它含蓄的部分里就给出了最强的励志。
            用一种创作者的匠心，跟这个电影市场说：
            你们看，华语喜剧不用老是翻拍的，自己打磨打磨原创，不是一样出牛掰东西？
          </a-typography-paragraph>
        </a-card>
        <a-card hoverable :style="{ width: '100%', margin: '20px 0' }">
          <div
            :style="{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '10px',
            }"
          >
            <span
              :style="{
                display: 'flex',
                alignItems: 'center',
                color: '#1D2129',
              }"
            >
              <a-avatar
                :style="{ marginRight: '8px', backgroundColor: '#165DFF' }"
              >
                李
              </a-avatar>
              <a-typography-text>李四</a-typography-text>
              <a-rate :default-value="5" readonly style="padding: 0 15px" />
              <a-typography-text disabled>
                2024-6-29 00:00:40
              </a-typography-text>
            </span>
          </div>
          <a-typography-paragraph
            :ellipsis="{
              rows: 3,
              expandable: true,
            }"
          >
            喜剧电影除了演员，其实非常考验编剧的水平，过了显得邋遢，不到显得冷了，笑得狠了没深挖，挖得狠了笑不出来，要想把度把握得刚刚好可是不容易。
            就说庄正直找公道这个小线，本来在杰克马问话这里已经是在反转中了，喜感也够了，但是编剧还在里面有处理，显得很厚，就让你的心始终在一波三折里，最后年会的这个总高潮也处理得很细致光是明里暗里的线就分了五层。
            第一层反派线，总经理回到董事长面前，小喽啰去捉拿老庄，没注意到舞台的变动。
            第二层工友线，展示人民群众的力量，老胡曾经帮助过的老技工，工厂的工人，外包的街舞团，主持人等等等等，全部为披露真相行动起来。
            第三层落跑老庄，老庄发现事情败露，偷偷潜入现场，想要为儿子上学钱讨个公道，我们也跟着他从另一个角度看到了这场繁华的年会。
            第四层中层干部这边，子乔还在和长脸经理一起准备老胡出的节目，也进一步向我们展示了众合内部的荒唐和滑稽，还有后台导演和演员们的工作情况。
            第五层主角的情况，他们气喘吁吁地跑到了会场，白客进之前还不忘立一立严谨认真打工人人设，签了个到，摇了人，唱了RAP，露了真相，救了人。
            这么复杂的情况愣是处理得层次分明，高潮叠出，最后的表演也很是拿得出手，唱得大家都很共情，只是现实生活中没有那么好的欧阳奋强来帮你主持公道。
            这也是是这部片里最大的悲凉，其实正如欧阳老师的红楼梦一样，从三个人一起在河边喝酒开始就早已奠定了全篇灰色的基调，“哀伤之雾，遍布华林。”所有的笑都是那样勉强，面对生活的普通人，上有老来下有小，哪能那么容易“仰天大笑出门去，我辈岂是蓬蒿人。”
          </a-typography-paragraph>
        </a-card>
      </a-row>
    </div>
    <div v-if="isPurchase">
      <a-divider orientation="left"><h3>影院列表</h3></a-divider>
      <a-list>
        <a-list-item v-for="item in cinemaList" :key="item.id">
          <a-row justify="space-between">
            <a-col :span="20">
              <a-row>
                <a-col>
                  <span style="color: black">{{ item.name }}</span>
                </a-col>
                <a-col>
                  <span style="color: grey">{{ item.address }}</span>
                </a-col>
              </a-row>
            </a-col>
            <a-col :span="4" align="right">
              <a-button
                type="primary"
                status="danger"
                shape="round"
                @click="handleCardClick(item)"
                >选座购票</a-button
              ></a-col
            >
          </a-row>
        </a-list-item>
      </a-list>
    </div>
    <a-modal
      v-model:visible="visible"
      width="60%"
      hide-cancel
      :ok-text="'关闭'"
      simple
      :footer="false"
      unmount-on-close
    >
      <Purchase v-if="currentCinema" :movie="movie" :cinema="currentCinema" />
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
  import { ref, defineProps, toRefs, watch } from 'vue';
  import { MovieRecord } from '@/api/systemManger/movieManger/types';
  import {
    CinemaListParams,
    CinemaRecord,
  } from '@/api/systemManger/cinemaManger/types';
  import { Message } from '@arco-design/web-vue';
  import queryPage from '@/api/systemManger/cinemaManger';
  import Purchase from '@/components/purchase/index.vue';

  const props = defineProps<{
    movie: MovieRecord;
  }>();
  const { movie } = toRefs(props);
  const form = ref({
    comment: undefined,
    rating: 4,
  });

  const heartIconColor = ref<string | null>();
  const handleColor = () => {
    heartIconColor.value = heartIconColor.value ? undefined : 'red';
  };

  const isPurchase = ref(false);
  const btnTitle = ref('特惠购票');
  const handlePurchase = () => {
    isPurchase.value = !isPurchase.value;

    btnTitle.value = isPurchase.value ? '查看更多电源详情' : '特惠购票';
  };
  const handleSubmit = () => {};

  const cinemaListParams = ref<CinemaListParams>({
    current: 1,
    pageSize: 20,
  });
  const cinemaList = ref<CinemaRecord[]>([]);
  const fetchData = async () => {
    try {
      const { data } = await queryPage(cinemaListParams.value);
      cinemaList.value = data.records;
    } catch (error) {
      Message.error((error as Error).message);
    }
  };

  const visible = ref(false);
  const currentCinema = ref<CinemaRecord>();
  const handleCardClick = (item: CinemaRecord) => {
    currentCinema.value = item;
    visible.value = true;
  };

  watch(
    () => movie.value,
    (val: MovieRecord) => {
      fetchData();
    },
    { deep: true, immediate: true }
  );
</script>

<script lang="ts">
  export default {
    name: 'Movie',
  };
</script>

<style lang="less" scoped>
  .info-col {
    margin-bottom: 10px;
    font-size: 18px;
  }

  .desc {
    margin-left: 1px;
    font-size: 18px;
  }

  .btn-group {
    display: 'flex';
    align-items: 'center';
  }
</style>
